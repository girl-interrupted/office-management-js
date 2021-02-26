'use strict'
class meetingRoom {
  constructor() {
    this.availability = true
  }

  entered() {
    this.availability = false
    return 'this room is unavailable for the meeting at the moment'
  }

  available() {
    this.availability = true
    return 'this room is available for a meeting'
  }

}