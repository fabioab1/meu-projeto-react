export function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Cientistas incríveis!</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}