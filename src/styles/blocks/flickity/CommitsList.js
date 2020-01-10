class CommitsList{
    constructor(container, result, newItem) {
      this._container = container;
      this._result = result;
      this._newItem = newItem;
    }
    
    _addCommit(...args) { 
        const { commitElement } = this._newItem(...args);
        this._container.append(commitElement); 
    }

    _renderCommits() {
        this._result.forEach(item => 
            this._addCommit(item.commit.committer.name, item.commit.committer.email, 
                item.commit.committer.date, item.commit.message, item.author.avatar_url));
    }

}

export {CommitsList};
