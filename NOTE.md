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

![alt text](images\8.png)

kubectl expose deployment kube-dep --type=LoadBalancer --port=80

this command is used to expose a pod port
this was not working so I used **port-forward** option in kubectl

- kubectl set image deployment/"image-name" "old-image-name":"new-image-name"  (to change the image of the containers)
- rollout command (--revision --to-revision, undo, restart. history, status)

-matchExpressions
 - {key: "label", operator: "In,NotIn", values: ['label-value-1','label-value-2']}