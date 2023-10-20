export function isValidYouTubeURL(url: string): boolean {
    const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]+(&\S+)?$|^https?:\/\/youtu.be\/[\w-]+|^https?:\/\/phuongmychi\.vn\/watch\?v=[\w-]+/;


    return youtubeUrlPattern.test(url);
  }