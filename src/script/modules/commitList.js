class CommitList{
    constructor(container, result, newItem) {
      this.container = container;
      this.result = result;
      this.newItem = newItem;
      this.renderCommits();
    }
    
    addCommit(...args) { 
        const { commitElement } = this.newItem(...args);
        this.container.append(commitElement); 
    }

    renderCommits() {
        this.result.forEach(item => 
            this.addCommit(item.commit.committer.name, item.commit.committer.email, 
                item.commit.committer.date, item.commit.message, item.author.avatar_url));
    }

}

export {CommitList};
