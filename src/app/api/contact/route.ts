import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(5),
    message: z.string().min(10),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate request body
        const validatedData = contactSchema.parse(body);

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Change this to your verified domain
            to: process.env.CONTACT_EMAIL || 'tu@email.com',
            subject: `Nuevo mensaje de contacto: ${validatedData.subject}`,
            html: `
        <h2>Nuevo mensaje de contacto desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Asunto:</strong> ${validatedData.subject}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${validatedData.message}</p>
      `,
        });

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, error: 'Invalid form data', details: error.issues },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
