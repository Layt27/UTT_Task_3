const BackgroundVideo = () => {
    return (
        <video
            id="background_video_container"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-70"
            playsInline
            preload="auto"
            loop
            autoPlay
            src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/1080p/mp4/file.mp4"
            muted
        />
    )
}

export default BackgroundVideo
