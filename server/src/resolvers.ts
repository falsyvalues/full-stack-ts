import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';
import mutationTwitterResolver from './resolvers/Mutation';
import Query from './resolvers/Query';
import TwitterTrendResolver from './resolvers/Trend';
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
  Mutation: mutationTwitterResolver,
  Tweet: tweetTwitterResolver,
  User: userTwitterResolver,
  Trend: TwitterTrendResolver,
};

export default resolvers;
