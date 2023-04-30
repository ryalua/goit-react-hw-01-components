import { Profile } from "./Profile/Profile";
import user from 'components/user.json';
import { Statistics } from "./Statistics/Statistics";
// import data from 'components/data.json';
import data from '../components/data.json';

export const App = () => {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        // stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title={data.title}
        label={data.label}
        // label={[1, 2, 3, 4, 5]}
        percentage={data.percentage}
      />
    </div>
  );
};


