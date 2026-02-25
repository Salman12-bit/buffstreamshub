export const metadata = {
    title: "Contact Us - Buffstreams",
    description: "Get in touch with the Buffstreams team. Reach out for support, inquiries, and feedback.",
    openGraph: {
        title: "Contact Us - BuffStream",
        description: "Have questions or need assistance? Contact the Buffstreams team for support, inquiries, and feedback.",
        url: "https://buffstreamshub.com/contactus",
        images: [
            {
                url: "https://buffstreamshub.com/images/buffstream-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Buffstreams for support and inquiries",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
