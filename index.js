// Arrays to keep track of each task's state / changing to objet
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}

//marks a task as complete/done


//log the task's details


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out the litter box");
const task2 = newTask("Do laundry", "😧");
const tasks = [task1, task2];

task1.logTaskState();
task1.markCompleted();
task1.logTaskState();




