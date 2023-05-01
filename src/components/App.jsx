import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';


console.log(friends)

export const App = () => {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
    </div>
  );
};


