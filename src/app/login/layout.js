export const metadata = {
    title: "Buffstreams Login",
    description: "This is the Login page for Buffstreams.",
    openGraph: {
        title: "Buffstreams Login",
        description: "Login to access Buffstreams and start following live sports and streams.",
        url: "https://buffstreamshub.com/login", 
        images: [
            {
                url: "https://buffstreamshub.com/images/favicon.jpg", 
                width: 1200,
                height: 630,
                alt: "Login to Buffstreams to follow live sports and streams",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
