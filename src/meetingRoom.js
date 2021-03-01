'use strict'
class meetingRoom {
  constructor(name) {
    this.availability = true
    this.name = name
  }

  entered() {
    if (this.availability === false) {
      throw new Error('please book another slot in order to use this room');
    }
    this.availability = false
    return 'this room is unavailable for the meeting at the moment'
  }

  available() {
    this.availability = true
    return 'this room is available for a meeting'
  }
}