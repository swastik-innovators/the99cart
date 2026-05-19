import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      formType,
      name, 
      email, 
      phoneNumber, 
      businessName, 
      sellerType, 
      productsCategory, 
      subdomain
    } = body;

    // 2. Validate essential fields based on formType
    const isWaitlist = formType === "waitlist";
    if (isWaitlist) {
      if (!email) {
        return NextResponse.json(
          { success: false, message: "Email address is required." },
          { status: 400 }
        );
      }
    } else {
      if (!name || !email) {
        return NextResponse.json(
          { success: false, message: "Name and email are required fields for seller applications." },
          { status: 400 }
        );
      }
    }

    // 3. SMTP Server Setup (Gmail Direct Connection)
    const smtpUser = "pytank101@gmail.com";
    const smtpPass = "komx slbv nyba lmaq";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 4. Craft a premium HTML template based on form type
    const mailSubject = isWaitlist 
      ? `🔥 New Waitlist Subscriber: ${email}`
      : `🚀 New Become a Seller Lead: ${name}`;

    const mailOptions = {
      from: `"The99Cart Notification" <${smtpUser}>`,
      to: "pytank101@gmail.com",
      subject: mailSubject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; color: #1E293B; margin: 0; padding: 40px 20px; }
            .card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 40px; max-width: 500px; margin: 0 auto; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.03); }
            .header { text-align: center; border-bottom: 1px solid #F1F5F9; padding-bottom: 24px; margin-bottom: 30px; }
            .logo { display: inline-block; background: linear-gradient(135deg, #6D47FF 0%, #DD00FF 100%); color: white; padding: 12px 20px; border-radius: 14px; font-weight: 800; font-size: 22px; letter-spacing: -0.02em; }
            .title { color: #0F172A; font-size: 20px; margin-top: 18px; font-weight: 800; letter-spacing: -0.01em; }
            .subtitle { color: #64748B; font-size: 13px; font-weight: 500; margin-top: 4px; }
            .section-title { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: #4F46E5; margin-top: 24px; margin-bottom: 8px; border-bottom: 1px dashed #E2E8F0; padding-bottom: 4px; }
            .label-sub { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B; margin-top: 12px; margin-bottom: 6px; }
            .field-value { font-size: 14px; font-weight: 600; color: #334155; background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 12px 16px; border-radius: 12px; }
            .badge { display: inline-block; background-color: rgba(109, 71, 255, 0.08); border: 1px solid rgba(109, 71, 255, 0.15); color: #4F46E5; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 8px; }
            .subdomain-value { font-size: 14px; font-weight: 700; color: #C026D3; background-color: rgba(221, 0, 255, 0.04); border: 1px dashed rgba(221, 0, 255, 0.2); padding: 12px 16px; border-radius: 12px; font-family: monospace; }
            .footer { text-align: center; font-size: 11px; color: #94A3B8; margin-top: 35px; border-top: 1px solid #F1F5F9; padding-top: 20px; font-weight: 500; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="logo">99</div>
              <div class="title">${isWaitlist ? "Joined Waitlist" : "Seller Application"}</div>
              <div class="subtitle">${isWaitlist ? "A new lead has joined the general waitlist" : "A new seller application has been received"}</div>
            </div>
            
            <div class="section-title">👤 Contact Information</div>
            
            ${!isWaitlist ? `
              <div class="label-sub">Full Name</div>
              <div class="field-value">${name}</div>
            ` : ""}
            
            <div class="label-sub">Email Address</div>
            <div class="field-value" style="color: #4F46E5;">${email}</div>

            ${!isWaitlist && phoneNumber ? `
              <div class="label-sub">Phone Number</div>
              <div class="field-value">${phoneNumber}</div>
            ` : ""}
            
            ${!isWaitlist ? `
              <div class="section-title">💼 Business Profile</div>
              
              <div class="label-sub">Business Name</div>
              <div class="field-value">${businessName || "Not Provided"}</div>
              
              <div class="label-sub">Seller Type</div>
              <div style="margin-top: 2px;"><span class="badge">${sellerType || "Individual Seller"}</span></div>

              <div class="label-sub">Products Category</div>
              <div class="field-value">${productsCategory || "Not Provided"}</div>
              
              ${subdomain ? `
                <div class="section-title">🛍️ Reserved Subdomain</div>
                <div style="margin-top: 8px;"><div class="subdomain-value">${subdomain}.the99cart.com</div></div>
              ` : ""}
            ` : ""}
            
            <div class="footer">
              This lead was automatically generated by <a href="https://the99cart.com" style="color: #6D47FF; text-decoration: none; font-weight: bold;">the99cart.com</a>.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 5. Send Mail via Nodemailer
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: isWaitlist ? "You have successfully joined the waitlist!" : "Your seller application details have been submitted!" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ SMTP Mail Delivery Error:", error);
    return NextResponse.json(
      { success: false, message: "SMTP connection failed. Check mail server settings." },
      { status: 500 }
    );
  }
}
