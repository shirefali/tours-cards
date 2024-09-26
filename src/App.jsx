import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTours = (id) => {
        const newTours = tours.filter((tour) => {
            return tour.id !== id;
        });
        setTours(newTours);
    };

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const tours = await res.json();
            setTours(tours);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        fetchTours();
    }, []);

    if (isLoading) {
        return (
            <main>
                <Loading />;
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No Tours Left</h2>
                    <button
                        className="btn"
                        style={{ marginTop: "2rem" }}
                        type="button"
                        onClick={() => fetchTours()}
                    >
                        Refresh
                    </button>
                </div>
            </main>
        );
    }
    {
    }

    return (
        <main>
            <Tours tours={tours} removeTours={removeTours} />
        </main>
    );
};
export default App;
