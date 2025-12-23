+++
date = "2024-10-26T15:44:10-04:00"
draft = false
title = "The Cotangent Bundle as the Basic Example"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

In symplectic geometry, the cotangent bundle $T^*Q$ of a manifold $Q$ plays the role of a universal model.
Unlike many geometric structures, its symplectic form is **canonical**: it is built from the smooth structure of $Q$ alone, with no choice of metric, connection, or auxiliary data.

## Cotangent Bundles and Local Coordinates

Let $Q$ be a smooth manifold of dimension $n$. Recall that $T^*Q=\bigsqcup_{q\in Q} T_q^*Q$ is a smooth $2n$-manifold,
and the projection
$$\pi:T^*Q\longrightarrow Q,\qquad \pi(\alpha_q)=q$$
is a smooth submersion.

> [!important] Fiber and Vertical Subspace
> For $\alpha\in T^*Q$, we write $q=\pi(\alpha)\in Q$.
> The **vertical subspace** at $\alpha$ is
> $$V_\alpha:=\ker(d\pi_\alpha)\subset T_\alpha(T^*Q).$$
> It is canonically isomorphic to $T_q^*Q$ (as a vector space): intuitively, $V_\alpha$ consists of tangent vectors
> to the fiber $T_q^*Q$ at the point $\alpha$.

In a coordinate chart $(U;q^1,\dots,q^n)$ on $Q$, every covector $\alpha\in T_q^*Q$ (with $q\in U$) can be written uniquely as
$$\alpha=\sum_{i=1}^n p_i\,dq^i\big|_q.$$
This produces induced coordinates $(q^1,\dots,q^n,p_1,\dots,p_n)$ on $\pi^{-1}(U)\subset T^*Q$.

> [!danger] Remark
> The $p_i$ are not "new functions on $Q$" but fiber coordinates on $T^*Q$.
> They depend on the chosen chart $(q^i)$, while the symplectic structure we will construct does not.

## The Tautological One-Form

There is a distinguished $1$-form on $T^*Q$ which records "evaluation of covectors on tangent directions."

> [!info] Tautological Liouville One-Form
> The **tautological $1$-form** $\lambda\in \Omega^1(T^*Q)$ is defined as follows.
> For $\alpha\in T^*Q$ with basepoint $q=\pi(\alpha)$ and for $v\in T_\alpha(T^*Q)$, set
> $$\lambda_\alpha(v):=\alpha\bigl(d\pi_\alpha(v)\bigr).$$

> [!danger] Remark
> The definition makes sense because $d\pi_\alpha(v)\in T_qQ$ and $\alpha\in T_q^*Q$ can be evaluated on it.
> Note also that if $v\in V_\alpha=\ker(d\pi_\alpha)$ is vertical, then $\lambda_\alpha(v)=0$.

> [!abstract] Local Expression for $\lambda$
> In induced coordinates $(q^1,\dots,q^n,p_1,\dots,p_n)$ on $\pi^{-1}(U)$, the tautological $1$-form is
> $$\lambda=\sum_{i=1}^n p_i\,dq^i.$$

> [!success] Proof
> Fix $\alpha=\sum_i p_i\,dq^i|_q$ with $q\in U$. For $v\in T_\alpha(T^*Q)$,
> write $d\pi_\alpha(v)=\sum_i a^i \partial_{q^i}\big|_q$ in the coordinate basis of $T_qQ$.
> Then
> $$\lambda_\alpha(v)=\alpha\bigl(d\pi_\alpha(v)\bigr)=\sum_i p_i\,dq^i\Bigl(\sum_j a^j \partial_{q^j}\Bigr)=\sum_i p_i a^i.$$
> On the other hand, $(dq^i)_\alpha(v)=a^i$ because $q^i\circ \pi$ is the coordinate function pulled back to $T^*Q$.
> Hence $\lambda_\alpha(v)=\sum_i p_i (dq^i)_\alpha(v)$ for all $v$, which proves the stated formula.

## The Canonical Symplectic Form

> [!info] Canonical Symplectic Form
> Define the $2$-form
> $$\omega:=d\lambda\in \Omega^2(T^*Q).$$
> We call $\omega$ the **canonical symplectic form** on $T^*Q$.

> [!abstract] Local Expression for $\omega$
> In induced coordinates $(q^i,p_i)$ on $\pi^{-1}(U)$,
> $$\omega=d\lambda=\sum_{i=1}^n dq^i\wedge dp_i.$$

> [!success] Proof
> From $\lambda=\sum_i p_i\,dq^i$ we get
> $$d\lambda=\sum_i dp_i\wedge dq^i = \sum_i dq^i\wedge dp_i,$$
> using skew-symmetry of the wedge product.

> [!note] Cotangent Bundles Are Symplectic
> For any smooth manifold $Q$, the pair $(T^*Q,\omega)$ is a symplectic manifold.
> Moreover, $\omega$ is exact: $\omega=d\lambda$.

> [!success] Proof
> Closedness is immediate from $d\omega=d(d\lambda)=0$.
> For nondegeneracy, work in induced coordinates $(q^i,p_i)$ on $\pi^{-1}(U)$, where
> $$\omega=\sum_{i=1}^n dq^i\wedge dp_i.$$
> Let $v\in T_\alpha(T^*Q)$ be such that $\omega_\alpha(v,\cdot)=0$. Write
> $$v=\sum_{i=1}^n a^i\frac{\partial}{\partial q^i}+\sum_{i=1}^n b_i\frac{\partial}{\partial p_i}.$$
> Testing against $\frac{\partial}{\partial p_j}$ gives
> $$0=\omega\Bigl(v,\frac{\partial}{\partial p_j}\Bigr)=\sum_i dq^i(v)\,dp_i\Bigl(\frac{\partial}{\partial p_j}\Bigr)=\sum_i a^i \delta_{ij}=a^j,$$
> so $a^j=0$ for all $j$. Testing against $\frac{\partial}{\partial q^j}$ gives
> $$0=\omega\Bigl(v,\frac{\partial}{\partial q^j}\Bigr)=\sum_i dq^i\Bigl(\frac{\partial}{\partial q^j}\Bigr)\,dp_i(v)=\sum_i \delta_{ij} b_i=b_j,$$
> so $b_j=0$ for all $j$. Hence $v=0$, proving nondegeneracy.

> [!danger] Remark
> This theorem is our first large supply of symplectic manifolds. It is also a prototype of **exact symplectic geometry**: many constructions in Floer theory simplify dramatically when $\omega$ is exact.

## Naturality: Cotangent Lifts Are Symplectomorphisms

The canonical form on $T^*Q$ is functorial with respect to diffeomorphisms of $Q$.

> [!info] Cotangent Lift
> Let $f:Q\to Q$ be a diffeomorphism. The **cotangent lift** of $f$ is the map
> $$T^*f:T^*Q\longrightarrow T^*Q,\quad (T^*f)(\alpha_q):=(f^{-1})^*(\alpha_q)\in T^*_{f(q)}Q.$$
> Equivalently, $(T^*f)(\alpha)$ is the unique covector at $f(\pi(\alpha))$ satisfying
> $$(T^*f)(\alpha)\bigl(df_{\pi(\alpha)}(u)\bigr)=\alpha(u)\quad\text{for all }u\in T_{\pi(\alpha)}Q.$$

> [!abstract] Functoriality of $\lambda$ and $\omega$
> For any diffeomorphism $f:Q\to Q$, the cotangent lift satisfies
> $$(T^*f)^*\lambda=\lambda\quad\text{and thus}\quad (T^*f)^*\omega=\omega.$$
> In particular, $T^*f$ is a symplectomorphism of $(T^*Q,\omega)$.

> [!success] Proof
> Fix $\alpha\in T^*Q$ with $q=\pi(\alpha)$. Note that $\pi\circ T^*f=f\circ \pi$.
> For $v\in T_\alpha(T^*Q)$, compute using the definition of $\lambda$:
> $$\bigl((T^*f)^*\lambda\bigr)_\alpha(v)=\lambda_{(T^*f)(\alpha)}\bigl(d(T^*f)_\alpha(v)\bigr)=(T^*f)(\alpha)\Bigl(d\pi_{(T^*f)(\alpha)}\bigl(d(T^*f)_\alpha(v)\bigr)\Bigr).$$
> Since $\pi\circ T^*f=f\circ \pi$, we have $d\pi\circ d(T^*f)=df\circ d\pi$, hence the expression equals
> $$(T^*f)(\alpha)\bigl(df_q(d\pi_\alpha(v))\bigr).$$
> By definition of $(T^*f)(\alpha)=(f^{-1})^*\alpha$, the last line is
> $$\alpha\bigl(d\pi_\alpha(v)\bigr)=\lambda_\alpha(v).$$
> Thus $(T^*f)^*\lambda=\lambda$, and applying $d$ gives $(T^*f)^*\omega=\omega$.

> [!danger] Remark
> This proposition is the abstract reason that canonical symplectic structures on cotangent bundles do not depend on coordinates: changes of coordinates on $Q$ are diffeomorphisms, and their cotangent lifts preserve $\lambda$ and $\omega$.

## First Lagrangian Submanifolds in $T^*Q$

Cotangent bundles come with canonical Lagrangian submanifolds.

> [!info] Zero Section
> The **zero section** is the embedding
> $$s_0:Q\longrightarrow T^*Q,\qquad s_0(q)=0_q\in T_q^*Q.$$
> We denote its image by $0_Q:=s_0(Q)\subset T^*Q$.

> [!abstract] The Zero Section Is Lagrangian
> The submanifold $0_Q\subset (T^*Q,\omega)$ is Lagrangian.

> [!success] Proof
> We compute the pullback of $\lambda$ along $s_0$.
> For $q\in Q$ and $u\in T_qQ$,
> $$(s_0^*\lambda)_q(u)=\lambda_{0_q}\bigl(d(s_0)_q(u)\bigr)=0_q\bigl(d\pi_{0_q}(d(s_0)_q(u))\bigr)=0,$$
> since $0_q\in T_q^*Q$ is the zero covector. Thus $s_0^*\lambda=0$, hence $s_0^*\omega=d(s_0^*\lambda)=0$.
> Therefore $0_Q$ is isotropic. As $\dim 0_Q=\dim Q=n=\frac{1}{2}\dim T^*Q$, it is Lagrangian.

Graphs of $1$-forms provide a large class of Lagrangians.

> [!important] Graph of a One-Form
> Let $\alpha\in \Omega^1(Q)$. Define the embedding
> $$\iota_\alpha:Q\longrightarrow T^*Q,\qquad \iota_\alpha(q)=\alpha_q\in T_q^*Q,$$
> and denote its image by $\Gamma(\alpha)\subset T^*Q$.

> [!abstract] Graphs of Closed One-Forms Are Lagrangian
> For $\alpha\in \Omega^1(Q)$, one has $\iota_\alpha^*\lambda=\alpha$.
> Consequently,
> $$\iota_\alpha^*\omega=d\alpha.$$
> In particular, $\Gamma(\alpha)$ is Lagrangian if and only if $d\alpha=0$.

> [!success] Proof
> Fix $q\in Q$ and $u\in T_qQ$. Since $\pi\circ \iota_\alpha=\mathrm{id}_Q$, we have $d\pi\circ d\iota_\alpha=\mathrm{id}$.
> Therefore, using the definition of $\lambda$,
> $$(\iota_\alpha^*\lambda)_q(u)=\lambda_{\alpha_q}\bigl(d(\iota_\alpha)_q(u)\bigr)=\alpha_q\bigl(d\pi_{\alpha_q}(d(\iota_\alpha)_q(u))\bigr)=\alpha_q(u).$$
> Thus $\iota_\alpha^*\lambda=\alpha$. Applying $d$ yields $\iota_\alpha^*\omega=d\alpha$.
> Finally, $\Gamma(\alpha)$ is Lagrangian iff $\omega$ restricts to zero on it, equivalently $\iota_\alpha^*\omega=0$, i.e.\ $d\alpha=0$.

> [!idea] Exact Graphs Are Exact Lagrangians
> If $\alpha=df$ for some smooth function $f:Q\to \mathbb{R}$, then $\Gamma(df)$ is a Lagrangian submanifold and
> $$\iota_{df}^*\lambda=df.$$

> [!danger] Remark
> The distinction between "closed" and "exact" graphs is global and reflects $H^1(Q;\mathbb{R})$.
> This will be a recurring theme later: many constructions become simpler on exact symplectic manifolds
> and for exact Lagrangians.

## Exactness and the Liouville Vector Field

Because $\omega=d\lambda$, there is a distinguished vector field on $T^*Q$ encoding fiberwise dilation.

> [!info] Liouville Vector Field
> On $(T^*Q,\omega=d\lambda)$, the **Liouville vector field** $Z$ is defined by
> $$\iota_Z\omega=\lambda.$$

> [!abstract] Local Expression and Scaling
> In induced coordinates $(q^i,p_i)$ on $\pi^{-1}(U)$, the Liouville vector field is
> $$Z=\sum_{i=1}^n p_i\,\frac{\partial}{\partial p_i}.$$
> Its flow is fiberwise scaling:
> $$\varphi_t(q,p)=(q,e^t p).$$

> [!success] Proof
> With $\omega=\sum_i dq^i\wedge dp_i$ and $\lambda=\sum_i p_i\,dq^i$, we compute
> $$\iota_{\partial/\partial p_j}\omega=\iota_{\partial/\partial p_j}\Bigl(\sum_i dq^i\wedge dp_i\Bigr)=-dq^j.$$
> Hence
> $$\iota_{\sum_i p_i\partial/\partial p_i}\omega=\sum_i p_i(-dq^i)= -\sum_i p_i\,dq^i.$$
> Thus the vector field $-\sum_i p_i\partial/\partial p_i$ solves $\iota_Z\omega=\lambda$ if we had chosen $\omega=-d\lambda$.
> With our convention $\omega=d\lambda=\sum_i dq^i\wedge dp_i$, the correct sign is
> $$\iota_{\sum_i p_i\partial/\partial p_i}\omega=\sum_i p_i\,dq^i=\lambda,$$
> so $Z=\sum_i p_i\partial/\partial p_i$.
>
> The flow equation $\dot p_i = p_i$, $\dot q^i=0$ integrates to $p_i(t)=e^t p_i(0)$, $q^i(t)=q^i(0)$,
> which is exactly $\varphi_t(q,p)=(q,e^t p)$.

> [!danger] Remark
> The Liouville flow does **not** preserve $\omega$; instead it scales it:
> $\varphi_t^*\lambda=e^t\lambda$ and $\varphi_t^*\omega=e^t\omega$.
> This behavior under scaling is one of the structural reasons cotangent bundles are so well-suited for (wrapped) Floer theory and for symplectic topology "at infinity."


