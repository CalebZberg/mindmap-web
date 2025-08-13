

class NodeModel{
    constructor(name, description, id){
        this.name = name;
        this.description = description;
        this.id = id;
        this.parents = new Set();
        this.children = new Set();
    }

    editName(new_name){
        if (typeof new_name === 'string'){
            this.name = new_name;
        } else {
            console.log("Attempted to change node name to non-string object") ;
        }
    }

    editDescription(new_description){
        if (typeof new_description === 'string'){
            this.description = new_description;
        } else {
            console.log("Attempted to change node description to non-string object") ;
        }
    }

    addParent(parentId){
        if (parentId !== this.id){
            this.parents.add(parentId);
        }
    }

    addChild(childId){
        if (childId !== this.id){
            this.children.add(childId);
        }
    }

    removeParent(parentId){
        this.parents.delete(parentId);
    }

    removeChild(childId){
        this.children.delete(childId);
    }

}

export default NodeModel;