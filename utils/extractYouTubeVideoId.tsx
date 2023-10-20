export function extractYouTubeVideoId(url: string): string | null |File {
    const videoIdPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|phuongmychi\.vn\/watch\?v=)([\w-]+)/;
    const match = url.match(videoIdPattern);
    if (match) {
      return match[1] || match[2]; 
    }
  
    return null; 
  }