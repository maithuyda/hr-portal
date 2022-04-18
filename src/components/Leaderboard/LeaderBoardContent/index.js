import UserScoreDetail from "../UserScoreDetail";
import "./index.scss";

const LeaderBoardContent = (props) => {
  const LEADERBOARD_DATA = [
    {
      id: "u1",
      name: "Samara",
      scoreAll: 2566258,
      scoreThisWeek: 10192,
    },
    {
      id: "u2",
      name: "TommyT22",
      scoreAll: 25154,
      scoreThisWeek: 5178,
    },
    {
      id: "u3",
      name: "RazieWod",
      scoreAll: 118094,
      scoreThisWeek: 4862,
    },
    {
      id: "u4",
      name: "Iverson:🇨🇳",
      scoreAll: 10911,
      scoreThisWeek: 4483,
    },
    {
      id: "u5",
      name: "siberian202angel",
      scoreAll: 19408,
      scoreThisWeek: 4355,
    },
    {
      id: "u6",
      name: "Eloise Freya",
      scoreAll: 11301,
      scoreThisWeek: 6118,
    },
  ];

  const maxScoreAllUser = LEADERBOARD_DATA.reduce(
    (prevUser, nextUser) => {
      return nextUser.scoreAll > prevUser.scoreAll ? nextUser : prevUser;
    },
    { scoreAll: 0 }
  );
  const maxScoreThisWeekUser = LEADERBOARD_DATA.reduce(
    (prevUser, nextUser) => {
      return nextUser.scoreThisWeek > prevUser.scoreThisWeek
        ? nextUser
        : prevUser;
    },
    { scoreThisWeek: 0 }
  );

  const maxScoreAll = maxScoreAllUser.scoreAll;
  const maxScoreThisWeek = maxScoreThisWeekUser.scoreThisWeek;

  const UserScoreList = LEADERBOARD_DATA.map((user) => (
    <UserScoreDetail
      key={user.id}
      id={user.id}
      name={user.name}
      scoreAll={user.scoreAll}
      scoreThisWeek={user.scoreThisWeek}
      maxScoreAll={maxScoreAll}
      maxScoreThisWeek={maxScoreThisWeek}
    />
  ));
  return <ol className="leaderboard">{UserScoreList}</ol>;
};

export default LeaderBoardContent;
