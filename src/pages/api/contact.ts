import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.PRIVATE_RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    try{
        const { name, phonePrefix, phone, email, company_name, subject, message } = await request.json();

        await resend.emails.send({
            from: 'fullRenew <onboarding@resend.dev>',
            to: 'agomzlo11@gmail.com',
            subject: 'Una nueva empresa se quiere poner en contacto con nosotros',
            html: `<p><strong>Nombre:</strong> ${name}</p>
                  <p><strong>Teléfono:</strong> ${phonePrefix} ${phone}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Empresa:</strong> ${company_name}</p>
                  <p><strong>Asunto:</strong> ${subject}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${message}</p>`,
        })
        return new Response(null, {status: 200})
    }catch{
        return new Response(null, {status: 500})
    }
}