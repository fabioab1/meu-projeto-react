import Avatar from "./Avatar";

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <h2>Meu texto</h2>
            {/*<Avatar 
                
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />*/}
        </Card>
    );
}