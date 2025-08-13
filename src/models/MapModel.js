import NodeModel from './NodeModel.js';

class MapModel{
    constructor(){
        this.idCount = 0;
        this.idRegistry = {};
        //this.nameRegistry = {};

        this.WorldId = this.createNode("World", "Contains everything");
        this.World = this.getNodeById(this.WorldId)
    }

    createNode(name, description){
        const node = new NodeModel(name, description, this.idCount);
        this.registerNode(node);
        return node.id;
    }

    deleteNode(nodeId){
        if (nodeId !== this.WorldId){
            const node = this.getNodeById(nodeId);

            const children = [...node.children];
            for (const child of children){
                this.delinkParentChild(nodeId, child)
            }

            const parents = [...node.parents];
            for (const parent of parents){
                this.delinkParentChild(parent, nodeId);
            }
            
            this.deregisterNode(nodeId);
        }
    }

    updateNodeName(nodeId, newName){
        const node = this.getNodeById(nodeId);
        node.editName(newName);
    }

    updateNodeDescription(nodeId, newDescription){
        const node = this.getNodeById(nodeId);
        node.editDescription(newDescription);
    }

    registerNode(node){
        this.idRegistry[node.id] = node;
        this.idCount++;
    }

    deregisterNode(nodeId){
        delete this.idRegistry[nodeId];
    }

    getNodeById(nodeId){
        return this.idRegistry[nodeId];
    }

    linkParentChild(parentId, childId){
        const parentNode = this.getNodeById(parentId);
        const childNode = this.getNodeById(childId);
        parentNode.addChild(childId);
        childNode.addParent(parentId);
    }

    delinkParentChild(parentId, childId){
        const parentNode = this.getNodeById(parentId);
        const childNode = this.getNodeById(childId);
        parentNode.removeChild(childId);
        childNode.removeParent(parentId);
    }

    getAncestors(nodeId){
        const node = this.getNodeById(nodeId);
        const ancestorIds = node.getAncestors();
        let ancestorNodes = [];
        for (const id of ancestorIds){
            ancestorNodes.push(this.getNodeById(id));
        }
        return ancestorNodes;
    }

    getDescendants(nodeId){
        const node = this.getNodeById(nodeId);
        const descendantIds = node.getDescendants();
        let descendantNodes = [];
        for (const id of descendantIds){
            descendantNodes.push(this.getNodeById(id));
        }
        return descendantNodes;
    }

    // getNodeById
    // searchByText
    // Undo/redo

}