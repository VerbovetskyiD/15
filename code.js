const toDoList = {
    _notes: JSON.parse(localStorage.getItem('notes')) || [],

    _findId(id) {
        return this._notes.findIndex( (note) => note.id === id );
    },

    _toLocalStorage() {
        const notes = JSON.stringify(this._notes);
        localStorage.setItem('notes', notes);
    },

    newNote(text) {
        const note = {
            id: Date.now(),
            text,
            isTaskComplete: false
        };
        this._notes.push(note);
        this._toLocalStorage();
    },

    removeNote(id) {
        const index = this._findId(id);
        if (index >= 0)
            this._notes.splice(index, 1);
        this._toLocalStorage();
    },

    updateNote(id, text) {
        const index = this._findId(id);
        if (index >= 0 && text)
            this._notes[index].text = text;
        this._toLocalStorage();
    },

    completeTask(id) {
        const index = this._findId(id);
        if (index >= 0)
            this._notes[index].isTaskComplete = true;
        this._toLocalStorage();
    }
};
//для проверки
toDoList.newNote();
toDoList.updateNote();
toDoList.completeTask();
toDoList.removeNote();
