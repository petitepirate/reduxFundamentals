import { 
    FETCH_TITLES, 
    ADD_POST, 
    REMOVE_POST, 
    UPDATE_POST,
    UPVOTE,
    DOWNVOTE
} from "./actionTypes";

function makeTitleFromPost({id, title, description, votes}) {
  return {id, title, description, votes};
}

export default function rootReducer(state = [], action) {
    switch(action.type) {
        case FETCH_TITLES: {
            console.log("fetching titles...");
            return action.titles;
        }

        case ADD_POST: {
            console.log("adding post...");
            return [...state, makeTitleFromPost(action.post)];
        }

        case REMOVE_POST: {
            console.log("removing post...");
            return state.filter(post => post.id !== action.postId);
        }

        case UPDATE_POST: {
            console.log("updating post...");
            return state.map(title => {
                return title.id === action.post.id
                ? title
                : makeTitleFromPost(action.post)
            });
        }

        case UPVOTE: {
          console.log("upvotedz");
          return state.map(title => {
            return title.id !== action.id
            ? title
            : {...title, votes: action.votes}
          });
        }
    
        case DOWNVOTE: {
          console.log("downvoted");
          return state.map(title => {
            return title.id !== action.id
            ? title
            : {...title, votes: action.votes}
          });
        }
    

        default: {
            return state;
        }
    }
}
