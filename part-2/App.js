// App.js

function App() {
    return (
      <div>
        <Tweet
          name="Tom Hanks"
          username="forestgump101"
          date={new Date().toDateString()}
          message="I like chocolate very much..."
        />
        <Tweet
          name="Lebron James"
          username="King23"
          date={new Date().toDateString()}
          message="Soccer is cool"
        />
        <Tweet
          name="John Doe"
          username="coolman"
          date={new Date().toDateString()}
          message="Hope your day is going good"
        />
      </div>
    );
  }