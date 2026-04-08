class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}
const video1 = new Video("JavaScript Basics", "John", 300);
video1.watch();

const video2 = new Video("Python Tutorial", "Sarah", 600);
video2.watch();
const videoData = [
  { title: "JS Intro", uploader: "Alice", time: 200 },
  { title: "HTML Basics", uploader: "Bob", time: 150 },
  { title: "CSS Flexbox", uploader: "Charlie", time: 400 },
  { title: "React Guide", uploader: "Dave", time: 800 },
  { title: "Node.js Crash Course", uploader: "Eve", time: 500 }
];
videoData.forEach(video => {
  const newVideo = new Video(video.title, video.uploader, video.time);
  newVideo.watch();
});

