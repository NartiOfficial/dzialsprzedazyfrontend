import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";

export async function POST(request: NextRequest) {
  try {
    const { orderId } = await request.json();

    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    doc.fontSize(20).text(`Faktura dla zamówienia #${orderId}`, {
      align: "left",
    });
    doc.moveDown();
    doc.fontSize(12).text("Dziękujemy za zakupy w naszym sklepie!");
    doc.moveDown();

    doc.text(`Data wystawienia: ${new Date().toLocaleDateString("pl-PL")}`);
    doc.text(`Numer faktury: FV/${orderId}`);
    doc.text("Lista produktów:");

    doc.moveDown();
    doc.text("— Koniec faktury —", { align: "center" });

    doc.end();

    const chunks: Buffer[] = [];
    for await (const chunk of doc) {
      chunks.push(chunk as Buffer);
    }
    const pdfBuffer = Buffer.concat(chunks);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("Błąd generowania PDF:", error);
    return NextResponse.json({ message: "Błąd generowania faktury" }, { status: 500 });
  }
}
