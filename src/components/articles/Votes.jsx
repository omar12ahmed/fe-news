import { useState } from "react";

function Votes(votes) {
  const vote = votes.votes;
  const [changeVotes, setChangeVotes] = useState(vote);

  return (
    <div>
      <p>Votes: {changeVotes}</p>
      <button onClick={() => setChangeVotes(changeVotes + 1)}> +</button>
      <button onClick={() => setChangeVotes(changeVotes - 1)}> -</button>
    </div>
  );
}

export default Votes;
