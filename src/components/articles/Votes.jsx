import { useState } from "react";
import { patchVotes } from "../../../api";
import { useParams } from "react-router";
import Error from "../Error";

function Votes({ votes }) {
  const [changeVotes, setChangeVotes] = useState(0);
  const [error, setError] = useState(null);

  const { article_id } = useParams();
  //   function handleVoteUp() {
  //     setChangeVotes(changeVotes + 1); // state add 1
  //     patchVotes(aticle_id, 0).catch((err) => {
  //       setChangeVotes(changeVotes - 1); // reverse local change
  //       console.log(err, "error updating votes");
  //       setIsError(true);
  //     });
  //   }

  function handleVoteUp() {
    setChangeVotes(changeVotes + 1);
    patchVotes(article_id, 1).catch((err) => {
      setChangeVotes((currentChangeVotes) => currentChangeVotes - 1);
      setError(err.response.status);
    });
  }

  function handleVotedown() {
    setChangeVotes(changeVotes - 1);
    patchVotes(article_id, 1).catch((err) => {
      setChangeVotes((currentChangeVotes) => currentChangeVotes + 1);
      setError(err.response.status);
    });
  }

  return (
    <div>
      {error ? <Error error={error} /> : null}
      <p>Votes: {votes + changeVotes}</p>
      <button onClick={() => handleVoteUp()}> +</button>
      <button onClick={() => handleVotedown()}> -</button>
    </div>
  );
}

export default Votes;
