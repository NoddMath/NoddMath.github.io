+++
date = "2024-11-07T15:44:10-04:00"
draft = false
title = "Generating Functions: From Symplectomorphisms to Action"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

This section explains a useful dictionary:
1. Certain symplectomorphisms can be encoded by functions** (generating functions), via their graphs as Lagrangians.
2. For Hamiltonian isotopies on an **exact** symplectic manifold, the same function that generates the time--$1$ map is (essentially) the **symplectic action** of trajectories.

## Exact Symplectic Manifolds and Primitives

> [!important] Sign Convention for Primitives
> When a symplectic form $\omega$ is exact, there is a choice of primitive.
> In many symplectic-topology constructions (especially on cotangent bundles), it is convenient to write
> $$\omega=-d\lambda$$
> for a distinguished $1$-form $\lambda$ (a ``Liouville form'').
> With this convention, on a cotangent bundle $T^*Q$ one takes $\lambda=\lambda_{\mathrm{can}}=\sum_i p_i\,dq^i$ and then
> $$\omega=\sum_i dq^i\wedge dp_i.$$

> [!info] Exact Symplectic Manifold
> An **exact symplectic manifold** is a triple $(M,\omega,\lambda)$ where $\omega$ is symplectic and
> $$\omega=-d\lambda$$
> for some $1$-form $\lambda\in \Omega^1(M)$.
> The form $\lambda$ is called a **Liouville form** (or primitive) for $\omega$.

> [!danger] Remark
> The primitive is not unique: if $\lambda$ is a primitive, then so is $\lambda+df$ for any smooth $f$.
> However, once a particular $\lambda$ is fixed, it makes sense to speak about **exact** Lagrangians and **exact** symplectomorphisms.

> [!info] Exact Lagrangians
> Let $(M,\omega=-d\lambda)$ be exact symplectic.
> A Lagrangian immersion $\iota:L\to M$ is called **exact** if $\iota^*\lambda$ is exact on $L$.
> Equivalently, there exists a (locally defined, hence globally defined on each component) function $f_L:L\to \mathbb{R}$ such that
> $$\iota^*\lambda=df_L.$$
> We call $f_L$ a **primitive** (or **potential**) for $L$ with respect to $\lambda$.

> [!danger] Remark
> In $T^*Q$, the zero section and conormal bundles are exact Lagrangians (with respect to $\lambda_{\mathrm{can}}$).
> Graphs of exact $1$-forms are exact; graphs of merely closed $1$-forms are generally not.

## Exact Symplectomorphisms and Their Generating Functions

> [!info] Exact Symplectomorphism
> Let $(M,\omega=-d\lambda)$ be exact symplectic.
> A symplectomorphism $\varphi\in \mathrm{Symp}(M,\omega)$ is called **exact (with respect to $\lambda$)**
> if the $1$-form $\varphi^*\lambda-\lambda$ is exact. Equivalently, there exists a smooth function
> $F_\varphi:M\to \mathbb{R}$ such that
> $$\varphi^*\lambda-\lambda=dF_\varphi.$$
> Any such $F_\varphi$ is called a **generating function** for $\varphi$ (with respect to $\lambda$).

> [!danger] Remark
> If $F_\varphi$ solves $\varphi^*\lambda-\lambda=dF_\varphi$, then $F_\varphi+c$ also solves it for any constant $c$.
> Thus $F_\varphi$ is determined only up to an additive constant on each connected component of $M$.

> [!abstract] Exact Symplectomorphisms Form a Subgroup
> The set
> $$\mathrm{Symp}_{\mathrm{ex}}(M,\omega;\lambda):=\{\varphi\in \mathrm{Symp}(M,\omega)\mid \varphi^*\lambda-\lambda\ \text{is exact}\}$$
> is a subgroup of $\mathrm{Symp}(M,\omega)$.
> Moreover, if $\varphi,\psi$ are exact with generating functions $F_\varphi,F_\psi$, then
> $$F_{\varphi\circ\psi}\equiv F_\psi + F_\varphi\circ \psi\quad (\mathrm{mod\ constants}).$$

> [!success] Proof
> If $\varphi^*\lambda-\lambda=dF_\varphi$ and $\psi^*\lambda-\lambda=dF_\psi$, then
> $$(\varphi\circ\psi)^*\lambda-\lambda=\psi^*(\varphi^*\lambda)-\lambda=\psi^*(\lambda+dF_\varphi)-\lambda=(\psi^*\lambda-\lambda)+d(F_\varphi\circ\psi)=d\bigl(F_\psi+F_\varphi\circ\psi\bigr).$$
> Thus $\varphi\circ\psi$ is exact with the stated generating function (up to constants).
> The identity map has $F\equiv 0$. For inverses, pull back $\varphi^*\lambda-\lambda=dF_\varphi$ by $\varphi^{-1}$ to obtain
> $$ (\varphi^{-1})^*\lambda-\lambda=-\,d(F_\varphi\circ \varphi^{-1}),$$
> so $\varphi^{-1}$ is exact.

> [!danger] Remark
> Exactness depends on the chosen primitive $\lambda$, not just on $\omega$.
> In most geometric situations, $\lambda$ is part of the data (e.g.\ the canonical $1$-form on a cotangent bundle),
> so this dependence is a feature rather than a bug.

## Hamiltonian Isotopies Are Exact and the Action Formula

Now fix an exact symplectic manifold $(M,\omega=-d\lambda)$ and a time-dependent Hamiltonian
$H_t:M\to \mathbb{R}$.

> [!info] Hamiltonian Isotopy
> The Hamiltonian vector field $X_{H_t}$ is defined by
> $$\iota_{X_{H_t}}\omega=dH_t.$$
> A Hamiltonian isotopy $\{\varphi_t\}_{t\in[0,1]}$ solves $\dot\varphi_t=X_{H_t}\circ \varphi_t$ with $\varphi_0=\mathrm{id}$.

> [!note] A Useful Differential Identity
> Let $X$ be any vector field on $M$. Then
> $$\mathcal{L}_X\lambda=d\bigl(\lambda(X)\bigr)+\iota_X(d\lambda).$$
> In particular, if $\omega=-d\lambda$ and $\iota_X\omega=dH$, then
> $$\mathcal{L}_X\lambda=d\bigl(\lambda(X)-H\bigr).$$

> [!success] Proof
> Cartan's formula gives $\mathcal{L}_X\lambda=d(\iota_X\lambda)+\iota_X(d\lambda)=d(\lambda(X))+\iota_X(d\lambda)$.
> If $\omega=-d\lambda$, then $d\lambda=-\omega$, hence $\iota_X(d\lambda)=-\iota_X\omega=-dH$.

> [!abstract] Generating Function for a Hamiltonian Isotopy
> Let $(M,\omega=-d\lambda)$ be exact symplectic and let $\{\varphi_t\}_{t\in[0,1]}$ be a Hamiltonian isotopy generated by $H_t$. Then $\varphi_1$ is an exact symplectomorphism. More precisely,
> $$\varphi_1^*\lambda-\lambda=dF,$$
> where
> $$F(x):=\int_0^1 \bigl(\lambda(X_{H_t})-H_t\bigr)\bigl(\varphi_t(x)\bigr)\,dt.$$

> [!success] Proof
> Differentiate $\varphi_t^*\lambda$:
> $$\frac{d}{dt}\bigl(\varphi_t^*\lambda\bigr)=\varphi_t^*(\mathcal{L}_{X_{H_t}}\lambda).$$
> By **A Useful Differential Identity**, $\mathcal{L}_{X_{H_t}}\lambda=d(\lambda(X_{H_t})-H_t)$, hence
> $$\frac{d}{dt}\bigl(\varphi_t^*\lambda\bigr)=d\Bigl(\bigl(\lambda(X_{H_t})-H_t\bigr)\circ \varphi_t\Bigr).$$
> Integrating from $t=0$ to $t=1$ and using $\varphi_0=\mathrm{id}$ gives
> $$\varphi_1^*\lambda-\lambda=d\left(\int_0^1 \bigl(\lambda(X_{H_t})-H_t\bigr)\circ \varphi_t\,dt\right)=dF.$$

> [!info] Symplectic Action of a Hamiltonian Trajectory
> Let $\gamma:[0,1]\to M$ be a smooth path. The **(Hamiltonian) action functional** associated to $H_t$ and $\lambda$ is
> $$\mathcal{A}_H(\gamma):=\int_0^1 \lambda(\dot{\gamma}(t))\,dt-\int_0^1 H_t(\gamma(t))\,dt.$$

> [!abstract] Action Equals Generating Function Along Flow Lines
> Let $\{\varphi_t\}$ be the Hamiltonian isotopy in **Generating Function for a Hamiltonian Isotopy**.
> For each $x\in M$, define the trajectory $\gamma_x(t):=\varphi_t(x)$.
> Then
> $$F(x)=\mathcal{A}_H(\gamma_x).$$
> In particular, if $x$ is a fixed point of $\varphi_1$ (so $\gamma_x$ is a loop), then the action of that loop is exactly $F(x)$.

> [!success] Proof
> Since $\dot{\gamma}_x(t)=X_{H_t}(\gamma_x(t))$, we have
> $\lambda(\dot{\gamma}_x(t))-H_t(\gamma_x(t))=\lambda(X_{H_t})(\gamma_x(t))-H_t(\gamma_x(t))$.
> Integrating over $t\in[0,1]$ gives $F(x)=\mathcal{A}_H(\gamma_x)$.

> [!danger] Remark
> In Floer theory, the action functional is used to filter the chain complex, and the Floer differential
> decreases action. **Generating Function for a Hamiltonian Isotopy** is one of the first places where that ``energy--action'' philosophy becomes visible.

## Graphs, Exact Lagrangians, and Fixed Points

Let $(M,\omega=-d\lambda)$ be exact symplectic. Consider the product $M\times M$ equipped with the symplectic form
$$\Omega:=\pi_1^*\omega-\pi_2^*\omega.$$
Define the $1$-form
$$\Lambda:=\pi_1^*\lambda-\pi_2^*\lambda.$$
Then
$$\Omega=-d\Lambda,$$
so $(M\times M,\Omega)$ is again exact symplectic.

> [!abstract] Diagonal Is Exact Lagrangian
> The diagonal $\Delta=\{(x,x)\}\subset M\times M$ is an exact Lagrangian submanifold.
> Moreover, $\Lambda|_{\Delta}\equiv 0$ (so one may take primitive $f_\Delta\equiv 0$).

> [!success] Proof
> We already know $\Delta$ is Lagrangian for $\Omega$.
> If $i_\Delta:\Delta\hookrightarrow M\times M$ is the inclusion, then
> $$i_\Delta^*\Lambda=i_\Delta^*(\pi_1^*\lambda-\pi_2^*\lambda)=\lambda-\lambda=0.$$

> [!abstract] Exactness of Graphs
> Let $\varphi\in \mathrm{Symp}(M,\omega)$ and let $\Gamma_\varphi\subset M\times M$ be its graph.
> Then $\Gamma_\varphi$ is an exact Lagrangian (with respect to $\Lambda$) if and only if $\varphi$ is exact (with respect to $\lambda$).
> More precisely, if $\varphi^*\lambda-\lambda=dF_\varphi$, then the pullback of $\Lambda$ to $\Gamma_\varphi$ equals $-dF_\varphi$.

> [!success] Proof
> Let $i_\varphi:M\to M\times M$ be $i_\varphi(x)=(x,\varphi(x))$, whose image is $\Gamma_\varphi$.
> Then
> $$i_\varphi^*\Lambda=i_\varphi^*(\pi_1^*\lambda-\pi_2^*\lambda)=\lambda-\varphi^*\lambda=-(\varphi^*\lambda-\lambda).$$
> Thus $i_\varphi^*\Lambda$ is exact iff $\varphi^*\lambda-\lambda$ is exact, and if $\varphi^*\lambda-\lambda=dF_\varphi$ then
> $$i_\varphi^*\Lambda=-dF_\varphi.$$

> [!danger] Remark
> Intersections $\Delta\cap \Gamma_\varphi$ are fixed points of $\varphi$.
> When $\varphi$ is Hamiltonian, **Generating Function for a Hamiltonian Isotopy** provides a canonical generating function $F_\varphi$,
> and the values of $F_\varphi$ at fixed points are action values of the corresponding Hamiltonian loops.

## Classical Generating Functions on $T^*Q$

We now specialize to the cotangent bundle of an $n$-manifold $Q$, with canonical $1$-form
$$\lambda_{\mathrm{can}}=\sum_{i=1}^n p_i\,dq^i,\qquad \omega_{\mathrm{can}}=-d\lambda_{\mathrm{can}}=\sum_{i=1}^n dq^i\wedge dp_i.$$
Consider the product $T^*Q\times T^*Q$ with coordinates $(q,p;Q,P)$ and the $1$-form
$$\Lambda:=\pi_1^*\lambda_{\mathrm{can}}-\pi_2^*\lambda_{\mathrm{can}}=p\,dq-P\,dQ.$$
Its symplectic form is $-d\Lambda$.

> [!important] Type I Generating Function
> Let $S=S(q,Q)$ be a smooth function on an open subset of $Q\times Q$ (in local coordinates).
> Define a subset $L_S\subset T^*Q\times T^*Q$ by the equations
> $$p=\frac{\partial S}{\partial q},\qquad P=-\,\frac{\partial S}{\partial Q}.$$

> [!abstract] The Set $L_S$ Is Exact Lagrangian Where Smooth
> Assume the defining equations determine a smooth $2n$-dimensional submanifold $L_S\subset T^*Q\times T^*Q$.
> Then $L_S$ is an exact Lagrangian with
> $$\Lambda|_{L_S}=dS.$$

> [!success] Proof
> On $L_S$, substitute into $\Lambda=p\,dq-P\,dQ$ to get
> $$\Lambda|_{L_S}=\frac{\partial S}{\partial q}\,dq-\Bigl(-\frac{\partial S}{\partial Q}\Bigr)\,dQ=\frac{\partial S}{\partial q}\,dq+\frac{\partial S}{\partial Q}\,dQ=dS.$$
> Hence $d(\Lambda|_{L_S})=0$, so $L_S$ is isotropic. Since $\dim L_S=2n=\frac12\dim(T^*Q\times T^*Q)$, it is Lagrangian.
> Exactness is immediate from $\Lambda|_{L_S}=dS$.

> [!danger] Remark
> If, additionally, the projection $(q,p;Q,P)\mapsto (q,p)$ restricts to a diffeomorphism $L_S\to T^*Q$ on some region,
> then $L_S$ is the graph of a symplectomorphism $(q,p)\mapsto (Q,P)$.
> In this sense, $S(q,Q)$ **generates** a canonical transformation.

> [!example] A Simple Translation in the Base
> Take $Q=\mathbb{R}^n$ and let $S(q,Q)=\frac12|Q-q|^2$.
> Then
> $$p=\partial_q S=-(Q-q),\qquad P=-\partial_Q S=-(Q-q),$$
> so $P=p$ and $Q=q-p$. Thus the generated symplectomorphism is
> $$(q,p)\longmapsto (q-p,p),$$
> a translation in the $q$-variables by $-p$.

> [!example] A Linear Symplectic Map from a Quadratic Generating Function
> Let $Q=\mathbb{R}^n$ and $S(q,Q)=\langle Aq,Q\rangle$ for an invertible matrix $A$.
> Then $p=A^TQ$ and $P=-Aq$, producing the linear map
> $$(q,p)\longmapsto (Q,P)=\bigl((A^T)^{-1}p,\,-Aq\bigr),$$
> which is symplectic. (Indeed its graph is Lagrangian by construction.)

## Generating Functions and the Action Viewpoint

> [!danger] Two Complementary Perspectives
> There are two related ``function-from-geometry'' mechanisms:
> (i) If $L\subset (M,\omega=-d\lambda)$ is an exact Lagrangian, then $\lambda|_L=df_L$ for some potential $f_L$.
> (ii) If $\varphi$ is an exact symplectomorphism, then $\varphi^*\lambda-\lambda=dF_\varphi$ for some $F_\varphi$.
> For Hamiltonian isotopies, **Generating Function for a Hamiltonian Isotopy** shows that $F_\varphi$ is literally an action integral along trajectories.
> This is the conceptual reason **action** appears in symplectic topology: it is the primitive measuring how far a Hamiltonian map fails to preserve the Liouville form pointwise.

> [!danger] Lagrangian Intersection Action Preview
> If $L_0,L_1\subset (M,\omega=-d\lambda)$ are exact Lagrangians with $\lambda|_{L_i}=df_i$ and if $\gamma:[0,1]\to M$
> is a Hamiltonian chord from $L_0$ to $L_1$ (meaning $\dot\gamma=X_{H_t}(\gamma)$ with $\gamma(0)\in L_0$, $\gamma(1)\in L_1$),
> then the natural action functional is
> $$\mathcal{A}_H(\gamma)=\int_0^1 \lambda(\dot\gamma)\,dt-\int_0^1 H_t(\gamma(t))\,dt + f_0(\gamma(0)) - f_1(\gamma(1)).$$
> The endpoint terms precisely correct the dependence on the choice of primitive for $\lambda|_{L_i}$.
> This will become the grading/filtration backbone of Lagrangian Floer homology later.
