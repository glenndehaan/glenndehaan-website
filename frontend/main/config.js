/**
 * Configuration object with defaults needed throughout the entire application
 */
export default {
    network: navigator.onLine,
    siteName: "Glenn de Haan",
    certification: [
        {
            provider: "Ubiquiti",
            name: "Ubiquiti Enterprise Wired & Wireless specialist",
            logo: "images/certification/mta-wsf.png",
            certificate: "docs/ubiquiti-uewws-certificate.pdf"
        },
        {
            provider: "Microsoft",
            name: "MTA: Windows Server Fundamentals",
            logo: "images/certification/mta-wsf.png",
            certificate: "docs/mta-wsf-certificate.pdf"
        },
        {
            provider: "Microsoft",
            name: "MTA: Networking Fundamentals",
            logo: "images/certification/mta-nf.png",
            certificate: "docs/mta-nf-certificate.pdf"
        },
        {
            provider: "edX",
            name: "LFS101x.2 Introduction to Linux",
            logo: "images/certification/edx-linux.png",
            certificate: "docs/edx-linux-certificate.pdf"
        }
    ],
    education: [
        {
            name: "Grafisch Lyceum Rotterdam MBO",
            study: "Media Workflow Management",
            logo: "images/education/glr.jpg"
        },
        {
            name: "Grafisch Lyceum Rotterdam VMBO",
            study: "Multimedia and Design",
            logo: "images/education/glr.jpg"
        }
    ],
    projects: [],
    programming: []
};
