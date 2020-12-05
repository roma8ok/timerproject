export class TimerModel {
  id: number;
  msHasPassed: number;
  isRunning: boolean;
  segmentMsHasPassed: number;
  segmentStartedDate: Date;

  constructor(id: number) {
    this.id = id;
    this.msHasPassed = 0;
    this.isRunning = false;
    this.segmentMsHasPassed = 0;
    this.segmentStartedDate = new Date();
  }

  toggleRunning() {
    if (this.isRunning) {
      this.isRunning = false;
      this.msHasPassed += this.segmentMsHasPassed;
      this.segmentMsHasPassed = 0;
    } else {
      this.isRunning = true;
      this.segmentMsHasPassed = 0;
      this.segmentStartedDate = new Date();
    }
  }

  changeSegment(currentDate: Date) {
    this.segmentMsHasPassed = currentDate.getTime() - this.segmentStartedDate.getTime();
  }

  getAllPassedMs() {
    return this.msHasPassed + this.segmentMsHasPassed;
  }

  getAllPassedDate() {
    return new Date(this.getAllPassedMs());
  }
}
