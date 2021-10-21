import {useEffect, useReducer, useState} from "react";
import './feed.css'
import Post from "../post/Post";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";
// import Skeleton from "../skeleton/Skeleton";

const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'

const initialState = {
    isLoading: true,
    videos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                isLoading: true,
                videos: []
            }
        case FETCH_SUCCESS:
            return {
                isLoading: false,
                videos: action.payload
            }
        case FETCH_FAILURE:
            return {
                isLoading: false,
                videos: []
            }
        default:
            return state
    }
}

const Feed = () => {
    const [{isLoading, videos}, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        const getVideos = async () => {
            dispatch({
                type: FETCH_REQUEST
            })
            try {
                const response = await axios.get('/api/videos/1')
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: response.data
                })
            } catch (err) {
                console.log(err)
                dispatch({
                    type: FETCH_FAILURE
                })
            }
        }
        getVideos()

    }, [])

    return (
        <div className="feed">
            {isLoading
                ? <Skeleton type={'feed'}/>
                : videos.map(video => {
                    return <Post video={video} key={video.id}/>
                })
            }
        </div>
    );
};

export default Feed;
