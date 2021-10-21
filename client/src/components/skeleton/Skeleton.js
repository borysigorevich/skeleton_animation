import React from 'react'
import './skeleton.css'
import {CircularProgress} from '@material-ui/core'

const Skeleton = ({type}) => {

    const COUNTER = 8

    const FeedSkeleton = () => (
        <div className={'postSk'}>
            <div className="postSkImg"></div>
            <div className="postSkInfo">
                <div className="postSkAvatar"></div>
                <div className="postSkDetail">
                    <div className="postSkText"></div>
                    <div className="postSkText sm"></div>
                </div>
            </div>
        </div>
    )


    const TopSkeleton = () => (
        <div className="topSkeleton">
            <div className="topSkIcon"></div>
            <div className="topSkIcon"></div>
            <div className="topSkIcon"></div>
            <div className="topSkAvatar"></div>
        </div>
    )

    const MenuSkeleton = () => (
        <div className={'menuSk'}>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
        </div>
    )

    const Circle = () => (
        <div className={'circle'}>
            <CircularProgress/>
        </div>
    )

    const CustomLoading = () => (
        <div className={'custom'}>
            <div className="balls">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
            </div>
        </div>
    )

    return (
        <>
            {type === 'feed' && Array(COUNTER).fill(<FeedSkeleton/>)}
            {type === 'top' && <TopSkeleton/>}
            {type === 'sidebar' && <MenuSkeleton/>}
            {type === 'circle' && <Circle/>}
            {type === 'custom' && <CustomLoading/>}
        </>
    )
};

export default Skeleton