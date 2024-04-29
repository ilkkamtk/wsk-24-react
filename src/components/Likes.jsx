import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useLike} from '../hooks/apiHooks';

const Likes = ({id}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);

  const {getLikeCountByMediaId} = useLike();

  const fetchLikeCount = async () => {
    const countResponse = await getLikeCountByMediaId(id);
    setLikeCount(countResponse.count);
  };

  useEffect(() => {
    fetchLikeCount();
  }, []);

  return (
    <div className="flex w-1/4 justify-around bg-gray-400">
      <p>{likeCount}</p>
      <button>{userLike ? 'Dislike' : 'Like'}</button>
    </div>
  );
};

Likes.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Likes;
