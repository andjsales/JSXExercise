function App() {
    return (
        <div>
            <Tweet
                name="Andrew"
                username="anderu"
                date={ new Date().toDateString() }
                message="cool app bro"
            />
            <Tweet
                name="Michael"
                username="fineokay"
                date={ new Date().toDateString() }
                message="alright alright"
            />
            <Tweet
                name="Adrian"
                username="yowhat"
                date={ new Date().toDateString() }
                message="aye nice"
            />
        </div>
    );
}



