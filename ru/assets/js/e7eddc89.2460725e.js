"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[852],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={id:"infra_testnet",title:"Testnet Deployment"},s=void 0,i={unversionedId:"infra_testnet",id:"infra_testnet",title:"Testnet Deployment",description:"This article shares the manifests and other yaml configurations which we have put together for the automated deployment of our testnet (Relay Chain + Parachain). If you are interested to find out more about our journey towards cutting-edge automated deployment using Kubernetes, together with the technical decisions we had to make on the way, please check out this blog post.",source:"@site/docs/infra_testnet.md",sourceDirName:".",slug:"/infra_testnet",permalink:"/ru/infra_testnet",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/infra_testnet.md",tags:[],version:"current",frontMatter:{id:"infra_testnet",title:"Testnet Deployment"},sidebar:"sidebar",previous:{title:"Crowdloans",permalink:"/ru/crowdloans"},next:{title:"Cross-Chain Integration",permalink:"/ru/build_xc_integration"}},l={},c=[{value:"Technologies used",id:"technologies",level:2},{value:"Cluster configuration",id:"cluster-config",level:2},{value:"Relay Chain",id:"alice",level:2},{value:"Deployment",id:"alice-deployment",level:3},{value:"Service",id:"alice-service",level:3},{value:"Ingress",id:"alice-ingress",level:3},{value:"Parachain",id:"bob",level:2},{value:"Deployment (collator)",id:"bob-deployment",level:3},{value:"Service",id:"bob-service",level:3},{value:"Public RPC",id:"bob-rpc",level:3},{value:"Ingress",id:"bob-ingress",level:3},{value:"ACM and Route53",id:"acm-and-route53",level:2},{value:"Terraform for Automated Provisioning",id:"terraform-for-automated-provisioning",level:2},{value:"Github Actions",id:"github-actions",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article shares the manifests and other yaml configurations which we have put together for the automated deployment of our testnet (Relay Chain + Parachain). If you are interested to find out more about our journey towards cutting-edge automated deployment using Kubernetes, together with the technical decisions we had to make on the way, ",(0,o.kt)("a",{parentName:"p",href:"https://basiliskfi.substack.com/p/automation-of-our-testnet-deployment"},"please check out this blog post"),"."),(0,o.kt)("h2",{id:"technologies"},"Technologies used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes - we run it in the cloud (AWS Fargate), mainly for convenience reasons. However, you can adapt the yaml manifests to spin up your own K8s cluster."),(0,o.kt)("li",{parentName:"ul"},"Terraform - because we like having our infra as code."),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions - for CI/CD.")),(0,o.kt)("h2",{id:"cluster-config"},"Cluster configuration"),(0,o.kt)("p",null,"Since we decided to run our Kubernetes cluster in the cloud with AWS Fargate, we can use the following yaml manifest for the cluster configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: fargate-cluster\n  region: ap-northeast-1\n\nnodeGroups:\n  - name: ng-1\n    instanceType: m5.large\n    desiredCapacity: 1\n\nfargateProfiles:\n  - name: fp-default\n    selectors:\n      # All workloads in the "default" Kubernetes namespace will be\n      # scheduled onto Fargate:\n      - namespace: default\n      # All workloads in the "kube-system" Kubernetes namespace will be\n      # scheduled onto Fargate:\n      - namespace: kube-system\n  - name: fp-dev\n    selectors:\n      # All workloads in the "dev" Kubernetes namespace matching the following\n      # label selectors will be scheduled onto Fargate:\n      - namespace: dev\n        labels:\n          env: dev\n          checks: passed\n')),(0,o.kt)("p",null,"Once we have this sorted out, it is time to create and apply the Kubernetes objects needed for the Relay Chain and the Parachain."),(0,o.kt)("h2",{id:"alice"},"Relay Chain"),(0,o.kt)("p",null,"First is Alice. We will create 3 types of objects: a Deployment, a Service and an Ingress object."),(0,o.kt)("h3",{id:"alice-deployment"},"Deployment"),(0,o.kt)("p",null,"In this manifest, we choose the name of our node, the ports to expose, the command and its arguments, as well as the number of replicas. This parameter is important as we only want one replica per node in order to avoid sync issues. Note that you can have as many nodes as necessary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: relaychain-alice-deployment\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: relaychain-alice\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: relaychain-alice\n    spec:\n      containers:\n      - image: YOUR-IMAGE-HERE\n        imagePullPolicy: Always\n        name: relaychain-alice\n        command: ["/polkadot/polkadot"]\n        args: ["--chain", "/polkadot/config.json", ..."]\n        ports:\n        - containerPort: 9944\n        - containerPort: 30333\n')),(0,o.kt)("h3",{id:"alice-service"},"Service"),(0,o.kt)("p",null,"We use the Service object in Kubernetes for at least two purposes here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the first place, we want to allow nodes to communicate with each other (please check ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/"},"this link for more info"),")."),(0,o.kt)("li",{parentName:"ol"},"In the second place, we will be able to expose the service to the outside world using an Ingress object as described in the following step.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: SVC_NAME\nspec:\n  ports:\n    - port: 9944\n      name: websocket\n      targetPort: 9944\n      protocol: TCP\n    - port: 30333\n      name: custom-port\n      targetPort: 30333\n      protocol: TCP\n  type: NodePort\n  selector:\n    app.kubernetes.io/name: relaychain-alice\n")),(0,o.kt)("p",null,"Please note that if you wish to expose the service to the outside world, the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," parameter has a crucial role."),(0,o.kt)("h3",{id:"alice-ingress"},"Ingress"),(0,o.kt)("p",null,"The Ingress object exposes our service to the outside world (in our case using the host address ",(0,o.kt)("inlineCode",{parentName:"p"},"relaychain.hydration.cloud"),"). For this purpose, we are using the ALB Controller Service of AWS (",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"},"more information here"),")."),(0,o.kt)("p",null,"The parameters of the Ingress object are pretty much basic, and can largely be kept as-is (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/guide/ingress/annotations/"},"more info here"),"). The most important value to adjust is the one of ",(0,o.kt)("inlineCode",{parentName:"p"},"alb.ingress.kubernetes.io/certificate-arn"),", which is the identifier of the ACM Certificate you get when you create an entry in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"},"ACM")," for your ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),". More details on this later on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: INGRESS_OBJECT_NAME\n  annotations:\n    kubernetes.io/ingress.class: alb\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/group.name: wstgroup2\n    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=4000\n    alb.ingress.kubernetes.io/auth-session-timeout: '86400'\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/listen-ports: '[{\"HTTP\":443}, {\"HTTPS\":443}]'\n    alb.ingress.kubernetes.io/healthcheck-path: /\n    alb.ingress.kubernetes.io/healthcheck-port: '80'\n    alb.ingress.kubernetes.io/target-group-attributes: stickiness.enabled=true,stickiness.lb_cookie.duration_seconds=600\n    alb.ingress.kubernetes.io/certificate-arn: YOUR_ARN\n  labels:\n    app: relaychain\nspec:\n  rules:\n    - host: relaychain.hydration.cloud\n      http:\n        paths:\n          - path: /ws/\n            backend:\n              serviceName: relaychain-bob-svc\n              servicePort: 80\n\n")),(0,o.kt)("h2",{id:"bob"},"Parachain"),(0,o.kt)("p",null,"After Alice is all set up, it is now time to take care of Bob. Also here, we will be creating the same types of objects: a Deployment for the collator, the necessary Services and an Ingress object. "),(0,o.kt)("h3",{id:"bob-deployment"},"Deployment (collator)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: YOUR_NAMESPACE\n  name: parachain-coll-01-deployment\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: parachain-coll-01\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: parachain-coll-01\n    spec:\n      containers:\n      - image: YOUR_IMAGE\n        imagePullPolicy: Always\n        name: parachain-coll-01\n        volumeMounts:\n          - mountPath: /tmp\n            name: persistent-storage\n        command: ["/basilisk/basilisk"]\n        args: ["--chain", "local", "--parachain-id", "", "--alice", "--base-path", "/basilisk/", "--node-key", "", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--", "--chain", "/tmp/rococo-local-raw.json", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--base-path", "/basilisk/", "--execution=wasm"]\n        ports:\n        - containerPort: 9944\n        - containerPort: 9933\n        - containerPort: 30333\n      volumes:\n        - name: persistent-storage\n          persistentVolumeClaim:\n            claimName: efs-pv  \n')),(0,o.kt)("h3",{id:"bob-service"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: NAMESPACE\n  name: coll-01-svc\nspec:\n  ports:\n    - port: 9944\n      name: websocket\n      targetPort: 9944\n      protocol: TCP\n    - port: 30333\n      name: custom-port\n      targetPort: 30333\n      protocol: TCP\n    - port: 9933\n      name: rpc-port\n      targetPort: 9933  \n  type: NodePort\n  selector:\n    app.kubernetes.io/name: parachain-coll-01\n")),(0,o.kt)("h3",{id:"bob-rpc"},"Public RPC"),(0,o.kt)("p",null,"In the cases of Bob, we also want to expose port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944")," which is used for RPC connections to the node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: NAMESPACE\n  name: public-rpc-svc\nspec:\n  ports:\n    - port: 80\n      name: websocket\n      targetPort: 9944\n      protocol: TCP\n  type: NodePort    \n  selector:\n    app.kubernetes.io/name: public-rpc\n")),(0,o.kt)("h3",{id:"bob-ingress"},"Ingress"),(0,o.kt)("p",null,"The Ingress manifest for Bob is the same as the one for ",(0,o.kt)("a",{parentName:"p",href:"#alice-ingress"},"Alice above"),"."),(0,o.kt)("h2",{id:"acm-and-route53"},"ACM and Route53"),(0,o.kt)("p",null,"If you need to expose your node to the outside world with a nice and secure URL, you can use AWS ACM. Basically, all you need to do is to create a certificate with the name of your URL, validate it (via DNS) and get the result ARN. Then add it as a value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"alb.ingress.kubernetes.io/certificate-arn")," parameter in your Ingress Manifest file, and voil\xe0!"),(0,o.kt)("h2",{id:"terraform-for-automated-provisioning"},"Terraform for Automated Provisioning"),(0,o.kt)("p",null,"Of course, the creation of your certificate can be done through Terraform in case you want to automate it in your CI (we didn't make this choice yet, but we still might do so in the future). For some inspiration you can take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},".tf")," file below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'provider "aws" {\n  region = "eu-west-1"\n}\n\n# DNS Zone Name: hydraction.cloud\nvariable "dns_zone" {\n  description = "Specific to your setup, pick a domain you have in route53"\n  default = "hydration.cloud"\n}\n# subdomain name\nvariable "domain_dns_name" {\n  description = "domainname"\n  default     = "YOUR_SUBDOMAIN"\n}\n\n\n# On cr\xe9e une datasource \xe0 partir du nom de la zone DNS\ndata "aws_route53_zone" "public" {\n  name         = "${var.dns_zone}"\n  private_zone = false\n}\nresource "aws_acm_certificate" "myapp-cert" {\n  domain_name       = "${var.domain_dns_name}.${data.aws_route53_zone.public.name}"\n  #subject_alternative_names = ["${var.alternate_dns_name}.${data.aws_route53_zone.public.name}"]\n  validation_method = "DNS"\n  lifecycle {\n    create_before_destroy = true\n  }\n}\nresource "aws_route53_record" "cert_validation" {\n  for_each = {\n    for dvo in aws_acm_certificate.myapp-cert.domain_validation_options : dvo.domain_name => {\n      name   = dvo.resource_record_name\n      record = dvo.resource_record_value\n      type   = dvo.resource_record_type\n    }\n  }\n  allow_overwrite = true\n  name            = each.value.name\n  records         = [each.value.record]\n  ttl             = 60\n  type            = each.value.type\n  zone_id         = data.aws_route53_zone.public.id\n}\n# This tells terraform to cause the route53 validation to happen\nresource "aws_acm_certificate_validation" "cert" {\n  certificate_arn         = aws_acm_certificate.myapp-cert.arn\n  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]\n}\n\noutput "acm-arn" {\n  value = aws_acm_certificate.myapp-cert.arn\n}\n\n')),(0,o.kt)("p",null,"The output value of this TF is the ARN to be used in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress")," manifest file."),(0,o.kt)("h2",{id:"github-actions"},"Github Actions"),(0,o.kt)("p",null,"After having the manifests ready, it is time to bring everything together and deploy the defined Kubernetes objects. Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply"),", we decided to integrate it in a CI/CD pipeline. We use Github Actions, and it's pretty straight-forward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: deploy app to k8s and expose\non:\n  push: \n    branches:\n      - main\n\njobs:\n  deploy-prod:\n    name: deploy\n    runs-on: ubuntu-latest\n    env:\n      ACTIONS_ALLOW_UNSECURE_COMMANDS: true\n      AWS_ACCESS_KEY_ID: ${{ secrets.K8S_AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.K8S_AWS_SECRET_KEY_ID }}\n      AWS_REGION: ${{ secrets.AWS_REGION }}\n      NAMESPACE: validators_namespace\n      APPNAME1: validator1\n      APPNAME2: validator2\n      DOMAIN: hydration.cloud\n      SUBDOMAIN: validator1\n      IMAGENAME: YOUR_IMAGE\n      CERTIFICATE_ARN: _CERTIFICATEARN_\n    \n    steps:\n      - name: checkout code\n        uses: actions/checkout@v2.1.0\n      \n      - name: run-everything\n        run: |\n          curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl\n          chmod +x ./kubectl\n          sudo mv ./kubectl /usr/local/bin/kubectl\n          export AWS_ACCESS_KEY_ID=${{ env.AWS_ACCESS_KEY_ID }}\n          export AWS_SECRET_ACCESS_KEY=${{ env.AWS_SECRET_ACCESS_KEY }}\n          curl --silent --location \"https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz\" | tar xz -C /tmp\n          sudo mv /tmp/eksctl /usr/local/bin\n          eksctl version\n          aws eks --region eu-west-1 update-kubeconfig --name CLUSTER_NAME\n          kubectl delete all --all -n ${{ env.NAMESPACE }}\n          eksctl create fargateprofile --cluster CLUSTER_NAME --region ${{ env.AWS_REGION }} --name ${{ env.NAMESPACE }} --namespace ${{ env.NAMESPACE }}\n          sed -i 's/_NAMESPACE_/${{ env.NAMESPACE }}/g' components.yaml\n          kubectl apply -f components.yaml\n")),(0,o.kt)("p",null,"This workflow creates the AWS Fargate profile after which it deploys the manifest file containing all your Kubernetes objects to the chosen Cluster. Don't forget to provide the correct access and secret keys :)"),(0,o.kt)("p",null,"Good luck and hit us up on Discord if you have any questions!"))}u.isMDXComponent=!0}}]);