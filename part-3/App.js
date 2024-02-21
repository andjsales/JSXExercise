function App() {
    return (
        <div>
            <Person
                name="Andrew"
                age={ 23 }
                hobbies={ ["movies", "watching anime", "chess"] }
            />
            <Person name="Amy" age={ 23 } hobbies={ ["swimming", "walking dogs"] } />
            <Person
                name="Adrian"
                age={ 27 }
                hobbies={ ["photography", "gaming"] }
            />
            <Person
                name="Val"
                age={ 25 }
                hobbies={ ["coding", "gaming", "eating"] }
            />
        </div>
    );
}