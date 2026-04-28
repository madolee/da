import os
import random

# 1) 동영상 파일이 있는 폴더 경로 (실제 서버에서 서비스하는 경로 기준)
VIDEO_DIR = '/mnt'  # 실제 파일이 있는 경로
WEB_PATH = 'videos/'  # 웹서버에서 접근 가능한 상대 경로 (예: http://서버/videos/)

# 2) 지원할 동영상 확장자
VIDEO_EXTENSIONS = ('.mp4', '.webm', '.ogg')

# 3) 폴더 내 동영상 파일명 리스트 생성
video_files = [f for f in os.listdir(VIDEO_DIR) if f.lower().endswith(VIDEO_EXTENSIONS)]

# 4) 리스트 랜덤 섞기
random.shuffle(video_files)

# 5) HTML 템플릿 (자바스크립트 배열 부분에 자동 삽입)
html_template = f'''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Random Video Player</title>
    <style>
        body {{ background: #000; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }}
        video {{ max-width: 100%; max-height: 100%; box-shadow: 0 0 20px rgba(0,0,0,0.5); }}
    </style>
</head>
<body>
    <video id="videoPlayer" width="1280" height="720" controls muted autoplay></video>

<script>
    // 자동으로 읽어온 동영상 파일명 배열
    const videos = {video_files};
    const basePath = "{WEB_PATH}";
    let currentIndex = 0;
    let isTransitioning = false;

    const videoPlayer = document.getElementById('videoPlayer');

    function playNext() {{
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex = (currentIndex + 1) % videos.length;
        videoPlayer.src = basePath + videos[currentIndex];
        videoPlayer.load();

        videoPlayer.onplaying = () => {{ isTransitioning = false; }};
    }}

    videoPlayer.addEventListener('timeupdate', () => {{
        if (videoPlayer.duration && videoPlayer.duration - videoPlayer.currentTime <= 2) {{
            playNext();
        }}
    }});

    videoPlayer.addEventListener('error', () => {{
        console.error("Error loading:", videos[currentIndex]);
        playNext();
    }});

    videoPlayer.src = basePath + videos[currentIndex];
</script>
</body>
</html>
'''

# 6) 결과 HTML 파일로 저장
output_path = 'random_video_player.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print(f"HTML file generated: {output_path}")

