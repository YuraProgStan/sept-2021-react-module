import React from 'react';
const Flight = ({item:{mission_name, launch_year, links:{mission_patch_small, video_link}}}) => {
    function YouTubeGetID1(url){
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }
    function YouTubeGetID2(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
    const t1 = performance.now();
    const youtube_id1 = YouTubeGetID1( video_link);
    const t2 = performance.now();
    console.log('time1 = ', t2-t1);
    const t3 = performance.now();
    const youtube_id2 = YouTubeGetID2( video_link);
    const t4 = performance.now();
    console.log('time2 = ', t4-t3);
    return (
        <div className='flight'>
            {mission_name} -- {launch_year}
            <img src={mission_patch_small} alt={mission_name} />
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube_id2}`}
                allowFullScreen/>
        </div>
    );
};

export default Flight;