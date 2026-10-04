// Add real certifications here with badgeImage, previewImage, title, description, and date.
const certifications = [
  {
    badgeImage: "https://images.credly.com/size/680x680/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
    badgeScale: 1.25,
    previewImage: "imagenes/certificaciones/aws-cloud-foundations.png",
    title: "AWS Academy Graduate – Cloud Foundations",
    titleEs: "Graduado de AWS Academy – Cloud Foundations",
    description: "Completed the 20-hour AWS Academy Cloud Foundations training.",
    descriptionEs: "Completé la capacitación de 20 horas de AWS Academy Cloud Foundations.",
    date: "May 29, 2026",
    dateEs: "29 de mayo de 2026",
    documentUrl: "certificaciones/documentos/AWS academy cloud fundations.pdf",
  },
  {
    badgeImage: "imagenes/certificaciones/rapid-developer-badge.png",
    previewImage: "imagenes/certificaciones/rapid-developer-certification.png",
    title: "Rapid Developer Certification",
    titleEs: "Certificación Rapid Developer",
    description: "Awarded for demonstrating the knowledge, skills, and experience required for the Rapid Developer Certification.",
    descriptionEs: "Otorgada por demostrar los conocimientos, habilidades y experiencia requeridos para la certificación Rapid Developer.",
    date: "June 3, 2026",
    dateEs: "3 de junio de 2026",
    documentUrl: "certificaciones/documentos/RapidDeveloperCertification.pdf",
  },
  {
    badgeImage: "imagenes/certificaciones/python-essentials-1.1.png",
    title: "Python Essentials 1",
    titleEs: "Python Essentials 1",
    description: "Completed the Cisco Networking Academy Python Essentials 1 course.",
    descriptionEs: "Completé el curso Python Essentials 1 de Cisco Networking Academy.",
    date: "October 3, 2026",
    dateEs: "3 de octubre de 2026",
    documentUrl: "certificaciones/documentos/PythonEssentials1Update20261003-20-8fk044.pdf",
    previewPdf: true,
  },
];

const certificationGrid = document.querySelector(".certifications-grid");
const emptyMessage = document.querySelector(".certifications-empty");
const isSpanish = document.documentElement.lang === "es";

if (certifications.length > 0) {
  certifications.forEach((certification) => {
    const card = document.createElement("article");
    card.className = "certification-card";

    if (certification.badgeImage) {
      const preview = document.createElement(certification.documentUrl ? "a" : "div");
      preview.className = "certification-card-media";
      if (certification.documentUrl) {
        preview.href = certification.documentUrl;
        preview.target = "_blank";
        preview.rel = "noopener noreferrer";
        preview.setAttribute(
          "aria-label",
          isSpanish ? `Abrir certificado: ${certification.titleEs} (PDF)` : `Open certificate: ${certification.title} (PDF)`,
        );
      }
      const badge = document.createElement("img");
      badge.className = "certification-badge";
      badge.src = certification.badgeImage;
      badge.style.setProperty("--badge-scale", certification.badgeScale ?? 1);
      badge.alt = isSpanish ? `Insignia: ${certification.titleEs}` : `Badge: ${certification.title}`;
      preview.append(badge);

      if (certification.previewImage || certification.previewPdf) {
        const certificatePreview = document.createElement("div");
        certificatePreview.className = "certificate-document-preview";

        if (certification.previewPdf) {
          const pdfPreview = document.createElement("iframe");
          pdfPreview.src = `${certification.documentUrl}#toolbar=0&navpanes=0&scrollbar=0`;
          pdfPreview.title = isSpanish ? `Vista previa del certificado: ${certification.titleEs}` : `Certificate preview: ${certification.title}`;
          pdfPreview.loading = "lazy";
          pdfPreview.tabIndex = -1;
          certificatePreview.append(pdfPreview);
        } else {
          const certificateImage = document.createElement("img");
          certificateImage.src = certification.previewImage;
          certificateImage.alt = isSpanish ? `Vista previa del certificado: ${certification.titleEs}` : `Certificate preview: ${certification.title}`;
          certificatePreview.append(certificateImage);
        }

        preview.append(certificatePreview);
      }

      card.append(preview);
    }

    const content = document.createElement("div");
    content.className = "certification-card-content";

    const title = document.createElement("h2");
    title.textContent = isSpanish ? certification.titleEs : certification.title;

    const description = document.createElement("p");
    description.textContent = isSpanish ? certification.descriptionEs : certification.description;

    const date = document.createElement("p");
    date.className = "certification-date";
    const dateLabel = document.createElement("strong");
    dateLabel.textContent = isSpanish ? "Obtenida: " : "Earned: ";
    date.append(dateLabel, document.createTextNode(isSpanish ? certification.dateEs : certification.date));

    content.append(title, description, date);
    card.append(content);
    certificationGrid.append(card);
  });

  emptyMessage.hidden = true;
}