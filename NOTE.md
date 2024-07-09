![alt text](images\1.png)

# Kubernetes

## Pod
- A pod is like the smallest possible unit in the k8s world where we can define in some configuration files where the k8s can create.
- A pod simply holds a container or multiple containers.
- These pods with the containers run inside the worker node, which runs the containers of applications.
- Nodes are like the machines /virtual instances like EC2 instances.
- Proxy/Config configures the network and external traffic.
- We can have different or equal container running on multiple worker nodes with load distributed equally.
- Master Node (Control Pane) interact with the worker nodes and controls them.
- All of these forms a cluster.

![alt text](images\2.png)

![alt text](images\3.png)

![alt text](images\4.png)

![alt text](images\5.png)

![alt text](images\6.png)

![alt text](images\7.png)

![alt text](images\8.png)

- kubectl is the command used to communicate with cluster
- kubernetes does not take up the responsibility of setting up the infrastructure (nodes and clusters)
- k8s understand the objects
- there is a **deployment** object which takes care of deployment of pods to nodes
- once the deployment is created there is a **scheduler** in the master node which takes the responsibility of assigning pods to one of the worker nodes
- **service object** is another object in k8s

![alt text](images\9.png)

kubectl expose deployment kube-dep --type=LoadBalancer --port=80

this command is used to expose a pod port
this was not working so I used **port-forward** option in kubectl

- kubectl set image deployment/"image-name" "old-image-name":"new-image-name"  (to change the image of the containers)
- rollout command (--revision --to-revision, undo, restart. history, status)

-matchExpressions
 - {key: "label", operator: "In,NotIn", values: ['label-value-1','label-value-2']}


## Volumes in Kubernetes
![alt text](images\10.png)
![alt text](images\11.png)


## Types of volumes

### emptyDir
- this volume simply created an empty dir when the pods starts and keeps the data as long as the pod is alive.
- this survives container restart, when the pod is removed this directory is removed
- when the same  pod is recreated again the empty dir is also recreated
- another downside is in the case of replicas, if one pod is under failure the request will go to other pod and the volume would not be found since the volumes are closely attached to pods 
- 
### hostPath
- this allows to have directories on the host machine (nodes) running the pods rather than having it on the pods
- then the data from that path will be exposed to different pods
- so multiple pods can share same paths
- the problem is this is node specific
- it works for multiple pods running on same node
- but if we have multiple nodes within the cluster or multiple clusters itself it is not a good option
- this is suitable if we also wanna share some existing data within the node

### csi
- it is an interface where other storage solutions like EFS can build driver solutions that utilize this interface

![alt text](images\12.png)

### Persistent volumes
- the key idea is that the volume will be completely detached from the pod and it's lifecycle.
- able to define it once and can be used by multiple pods
- the pods can use the **Persistent Volume Claims** to access and interact with on or more standalone persistent volumes that are present within the cluster.
