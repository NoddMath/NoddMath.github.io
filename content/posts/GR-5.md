+++
date = "2025-02-24T15:44:10-04:00"
draft = false
title = "Semi-Riemannian Metrics and the Levi-Civita Connection"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

Lecture 4 introduced affine connections as the minimal device that makes sense of “differentiating vector fields” on a manifold.
General relativity adds a decisive constraint: the geometry (and, in the usual interpretation, the gravitational field) is encoded by a **Lorentzian metric** $g$.
Once $g$ is given, we do **not** want an arbitrary connection. We want the connection that is forced on us by the requirements that

1. the connection respects the way $g$ measures time, length, and angles (metric compatibility), and
2. the connection introduces no extra “twisting” beyond what is already contained in $g$ (torsion-free).

The resulting connection is the **Levi-Civita connection**. It is not extra structure: it is determined by $g$ alone.

There is also a very physical way to say the same thing. The metric $g$ tells you what an ideal clock measures along a timelike curve (proper time),
and what an ideal ruler measures on spatial slices. A connection tells you how to compare vectors at nearby points.
Metric compatibility means “parallel transport preserves what clocks and rulers measure,” while torsion-freeness is the mildest condition
consistent with the idea that locally inertial frames exist (we will make this precise later via normal coordinates).

A good reading pipeline for this lecture is:

1. define semi-Riemannian metrics and signatures (especially Lorentzian);
2. discuss the causal cones and observers pointwise (the curved-spacetime upgrade of Lecture 1);
3. introduce metric compatibility and torsion with geometric and physical interpretations;
4. derive the Koszul formula and prove the fundamental theorem (existence and uniqueness of Levi-Civita);
5. convert Koszul into the coordinate Christoffel formula and run it in examples to build computational reflexes.

## Semi-Riemannian Metrics, Index, and Signature

> [!info] Semi-Riemannian Metric
> Let $M$ be a smooth $n$-manifold. A **semi-Riemannian metric** on $M$ is a smooth symmetric $(0,2)$-tensor field $g\in\Gamma(\mathsf{T}^0{}_2M)$ such that for every $p\in M$ the bilinear form
> $$g_p:T_pM\times T_pM\to\mathbb{R}$$
> is nondegenerate.

Nondegeneracy is the only algebraic condition we need in order to raise and lower indices: it is exactly what makes the musical maps $\flat,\sharp$ well-defined. Positivity is **not** assumed.

> [!info] Index and Signature; Riemannian and Lorentzian
> At each $p\in M$, the nondegenerate symmetric form $g_p$ has a signature $(\nu,n-\nu)$, meaning that in some basis it is represented by a diagonal matrix with $\nu$ negative entries and $n-\nu$ positive entries. The integer $\nu$ is the **index** of $g$ at $p$.
> 1. If $\nu=0$, then $g$ is **Riemannian**.
> 2. If $\nu=1$, then $g$ is **Lorentzian**. A Lorentzian manifold $(M,g)$ is called a **spacetime**.

> [!abstract] Index Is Locally Constant, Hence Constant on Connected Components
> If $g$ is a semi-Riemannian metric on $M$, then the index $\nu(p)$ is locally constant. In particular, on each connected component of $M$ the index is constant.

> [!success] Proof
> Fix $p\in M$ and choose a local frame on a neighborhood $U$ so that $g$ is represented by a symmetric matrix $G(x)$ depending smoothly on $x\in U$. Nondegeneracy means $\det G(x)\neq 0$ on $U$ (after shrinking if needed). The eigenvalues of $G(x)$ vary continuously with $x$, and none can cross $0$ without violating $\det G(x)\neq 0$. Hence the number of negative eigenvalues is constant on $U$.

## Causal Classification and Observers in Curved Spacetime

Everything in Lecture 1 about timelike/null/spacelike vectors becomes a pointwise statement in a Lorentzian manifold.

> [!info] Timelike, Null, Spacelike
> Let $(M,g)$ be Lorentzian and $p\in M$. A nonzero vector $v\in T_pM$ is called
> $$\text{timelike if } g(v,v)<0,\quad \text{null if } g(v,v)=0,\quad \text{spacelike if } g(v,v)>0.$$
> A vector is **causal** if it is timelike or null.

> [!danger] Remark
> Timelike directions are the directions in which ideal clocks can move; null directions are the directions of light rays. Spacelike vectors represent purely spatial directions as seen by some observer. The fact that this classification is **pointwise** is one of the central conceptual shifts from special to general relativity: the light cones can “tilt” and “squeeze” from point to point because $g$ varies.

To talk about “future” and “past” globally, one needs an additional choice.

> [!info] Time Orientation; Future-Directed Vectors
> A Lorentzian manifold $(M,g)$ is **time-orientable** if there exists a smooth timelike vector field $T$ on $M$. A choice of such a field $T$ (up to homotopy through timelike fields) is called a **time orientation**. Given a time orientation, a timelike or null vector $v\in T_pM$ is called **future-directed** if $g(v,T_p)<0$, and **past-directed** if $g(v,T_p)>0$.

> [!danger] Remark
> Time orientation is a global topological condition, not automatic from the local signature. Most spacetimes used in GR are time-orientable and come with a preferred time orientation. When one talks about “an observer” or “a future-directed geodesic,” one is implicitly assuming a time orientation.

> [!info] Observer; Local Rest Space
> Assume $(M,g)$ is time-oriented. An **observer at $p$** is a future-directed unit timelike vector $U\in T_pM$:
> $$g(U,U)=-1,\quad U\ \text{future-directed}.$$
> The **rest space** of $U$ is the $g$-orthogonal complement
> $$U^\perp:=\{X\in T_pM:\ g(X,U)=0\}.$$

> [!abstract] The Rest Space Is Euclidean
> Let $(M,g)$ be Lorentzian, $p\in M$, and $U\in T_pM$ timelike. Then the restriction of $g_p$ to $U^\perp$ is positive definite.

> [!success] Proof
> Choose a $g_p$-orthonormal basis of $T_pM$ with $E_0=U$ and $g(E_0,E_0)=-1$, $g(E_i,E_i)=+1$ for $i=1,2,3$. Then $U^\perp=\mathrm{span}\{E_1,E_2,E_3\}$ and $g$ is positive definite on this span.

> [!danger] The $3+1$ Instinct
> For each observer $U$, the tangent space splits as
> $$T_pM=\mathbb{R}U\oplus U^\perp,$$
> and any vector $V\in T_pM$ decomposes into “time part” and “space part” as seen by $U$. This is the curved-spacetime prototype for $3+1$ decompositions (and later for splitting tensors such as the stress-energy tensor).

## Metric Compatibility: Preserving What the Metric Measures

A connection should interact with the metric the way ordinary differentiation interacts with a constant inner product in Euclidean space. This is exactly the condition $\nabla g=0$.

> [!info] Metric Compatibility
> Let $(M,g)$ be semi-Riemannian and let $\nabla$ be an affine connection. We say $\nabla$ is **metric-compatible** if $\nabla g=0$, meaning that for all $X,Y,Z\in\mathfrak{X}(M)$,
> $$X\big(g(Y,Z)\big)=g(\nabla_XY,Z)+g(Y,\nabla_XZ).$$

> [!abstract] Parallel Transport Preserves Inner Products
> Let $(M,g)$ be semi-Riemannian and $\nabla$ metric-compatible. Let $\gamma:I\to M$ be a $C^1$ curve and let $V,W$ be vector fields along $\gamma$ that are parallel along $\gamma$ (i.e. $DV/dt=0$ and $DW/dt=0$ with respect to $\nabla$). Then $t\mapsto g(V(t),W(t))$ is constant.

> [!success] Proof
> Write $X=\dot\gamma$. By metric compatibility applied along $\gamma$,
> $$\frac{d}{dt}\,g(V,W)=X\big(g(V,W)\big)=g(\nabla_XV,W)+g(V,\nabla_XW).$$
> Parallelness means $\nabla_XV=0$ and $\nabla_XW=0$, hence the derivative vanishes.

> [!danger] Physical Meaning
> Metric compatibility says that the connection preserves the calibration of rulers and clocks under parallel transport: lengths, angles, and causal character are preserved by parallel transport. In GR this is the standard “minimal coupling” choice: once you accept that the metric is what tells you how to measure, you want the geometry-induced transport law to respect that measurement.

> [!abstract] Coordinate Form of $\nabla g=0$
> Let $(x^i)$ be coordinates, and write $g_{ij}=g(\partial_i,\partial_j)$ and $\Gamma^k{}_{ij}$ for the Christoffel symbols of $\nabla$. Then $\nabla g=0$ is equivalent to
> $$\partial_i g_{jk}-\Gamma^{m}{}_{ij}g_{mk}-\Gamma^{m}{}_{ik}g_{jm}=0\quad\text{for all }i,j,k.$$

> [!success] Proof
> Compute $(\nabla_{\partial_i}g)(\partial_j,\partial_k)$ using the Leibniz rule for covariant derivatives of tensors:
> $$ (\nabla_{\partial_i}g)(\partial_j,\partial_k)=\partial_i(g_{jk})-g(\nabla_{\partial_i}\partial_j,\partial_k)-g(\partial_j,\nabla_{\partial_i}\partial_k). $$
> Substitute $\nabla_{\partial_i}\partial_j=\Gamma^m{}_{ij}\partial_m$ and rewrite the pairings in components.

> [!danger] Index Gymnastics Become Honest
> If $\nabla g=0$, then raising and lowering indices commutes with $\nabla$. For instance, if $\alpha$ is a 1-form and $\alpha^\sharp$ is the corresponding vector field, then
> $$\nabla_X(\alpha^\sharp)=(\nabla_X\alpha)^\sharp.$$
> This is one of the reasons Levi-Civita is the natural connection in GR: it lets you manipulate tensor equations in a clean, invariant way.

## Torsion: What It Measures and Why GR Sets It to Zero

> [!info] Torsion
> Let $\nabla$ be an affine connection on $TM$. Its **torsion** is the $(1,2)$-tensor
> $$T^\nabla(X,Y):=\nabla_XY-\nabla_YX-[X,Y].$$
> We say $\nabla$ is **torsion-free** if $T^\nabla\equiv 0$, i.e. $\nabla_XY-\nabla_YX=[X,Y]$ for all $X,Y$.

> [!danger] Remark
> Torsion measures the failure of $\nabla$ to be symmetric in its lower slots after correcting for the noncommutativity of vector fields. In coordinates, $[\partial_i,\partial_j]=0$, so torsion-free becomes the symmetry $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$.

> [!abstract] Torsion-Free $\Longleftrightarrow$ Symmetric Christoffel Symbols in Coordinate Bases
> Let $(x^i)$ be a chart and let $\Gamma^k{}_{ij}$ be the Christoffel symbols of $\nabla$. Then $T^\nabla=0$ if and only if
> $$\Gamma^k{}_{ij}=\Gamma^k{}_{ji}\quad\text{for all }i,j,k$$
> in every coordinate system.

> [!success] Proof
> In coordinates, $[\partial_i,\partial_j]=0$, so torsion-free means
> $$0=T^\nabla(\partial_i,\partial_j)=\nabla_{\partial_i}\partial_j-\nabla_{\partial_j}\partial_i=(\Gamma^k{}_{ij}-\Gamma^k{}_{ji})\partial_k,$$
> hence symmetry. Conversely, symmetry gives $T^\nabla(\partial_i,\partial_j)=0$ on coordinate frames, and tensoriality of torsion then implies $T^\nabla\equiv 0$.

> [!danger] Why GR Chooses Torsion-Free
> In the standard formulation of GR, the metric $g$ already contains the gravitational degrees of freedom; torsion would introduce additional geometric degrees of freedom not observed in classical tests of gravity. That said, torsion is a meaningful option in extensions (e.g. Einstein–Cartan theory). What matters for us is that setting torsion to zero is a clean and geometrically natural restriction that leads to a connection uniquely determined by $g$.

## The Levi-Civita Connection and the Fundamental Theorem

> [!info] Levi-Civita Connection
> Let $(M,g)$ be semi-Riemannian. A connection $\nabla$ on $TM$ is the **Levi-Civita connection** of $g$ if
> $$\nabla g=0\quad\text{and}\quad T^\nabla=0.$$

> [!note] Fundamental Theorem of Semi-Riemannian Geometry
> Let $(M,g)$ be a semi-Riemannian manifold. There exists a unique affine connection $\nabla$ on $TM$ that is torsion-free and metric-compatible. This $\nabla$ is the Levi-Civita connection of $g$.

The workhorse identity behind both existence and uniqueness is the Koszul formula. It is best thought of as “the connection expressed purely in terms of $g$ and Lie brackets.”

> [!abstract] Koszul Formula
> Let $(M,g)$ be semi-Riemannian and let $\nabla$ be a connection on $TM$. Then $\nabla$ is torsion-free and metric-compatible if and only if for all $X,Y,Z\in\mathfrak{X}(M)$,
> $$2\,g(\nabla_XY,Z)=X\big(g(Y,Z)\big)+Y\big(g(Z,X)\big)-Z\big(g(X,Y)\big)-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).$$

> [!success] Proof
> Assume first $\nabla g=0$ and $T^\nabla=0$.
>
> Write down metric compatibility in three cyclic permutations:
> $$X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ),$$
> $$Y(g(Z,X))=g(\nabla_YZ,X)+g(Z,\nabla_YX),$$
> $$Z(g(X,Y))=g(\nabla_ZX,Y)+g(X,\nabla_ZY).$$
> Add the first two and subtract the third:
> $$\begin{aligned}X(g(Y,Z))+Y(g(Z,X))-Z(g(X,Y))={}&g(\nabla_XY,Z)+g(Y,\nabla_XZ)+g(\nabla_YZ,X)\\&+g(Z,\nabla_YX)-g(\nabla_ZX,Y)-g(X,\nabla_ZY).\end{aligned}$$
> Use torsion-freeness to rewrite the “wrongly ordered” derivatives:
> $$\nabla_YX=\nabla_XY+[X,Y],\quad \nabla_ZX=\nabla_XZ+[X,Z],\quad \nabla_ZY=\nabla_YZ+[Y,Z].$$
> Substitute these; cancellations using symmetry of $g$ yield
> $$X(g(Y,Z))+Y(g(Z,X))-Z(g(X,Y))=2g(\nabla_XY,Z)+g(Z,[X,Y])-g(Y,[X,Z])-g(X,[Y,Z]).$$
> Rearranging and using $[X,Z]=-[Z,X]$ gives the Koszul formula.
>
> Conversely, assume Koszul holds for all $X,Y,Z$.
>
> For **metric compatibility**, write Koszul for $(X,Y,Z)$ and $(X,Z,Y)$ and add; bracket terms cancel and give
> $$2g(\nabla_XY,Z)+2g(\nabla_XZ,Y)=2X(g(Y,Z)),$$
> so $\nabla g=0$.
>
> For **torsion-freeness**, subtract Koszul with $X,Y$ swapped:
> $$2g(\nabla_XY-\nabla_YX,Z)=2g([X,Y],Z).$$
> By nondegeneracy of $g$, $\nabla_XY-\nabla_YX=[X,Y]$, so $T^\nabla=0$.

> [!success] Proof
> **Proof of the fundamental theorem.**
>
> **Uniqueness.** If $\nabla$ is torsion-free and metric-compatible, Koszul expresses $g(\nabla_XY,Z)$ purely in terms of $g$ and Lie brackets. For fixed $X,Y$, the right-hand side is $C^\infty(M)$-linear in $Z$, hence a 1-form. Since $g$ is nondegenerate, $Z\mapsto g(\nabla_XY,Z)$ determines $\nabla_XY$ uniquely.
>
> **Existence.** Define for $X,Y,Z\in\mathfrak{X}(M)$,
> $$F(X,Y,Z):=X(g(Y,Z))+Y(g(Z,X))-Z(g(X,Y))-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).$$
> For fixed $X,Y$, the map $Z\mapsto F(X,Y,Z)$ is $C^\infty(M)$-linear (a direct check using bilinearity of $g$ and the Leibniz rule for Lie brackets). Hence $Z\mapsto \tfrac12F(X,Y,Z)$ defines a 1-form. By nondegeneracy of $g$, there exists a unique vector field $\nabla_XY$ satisfying
> $$g(\nabla_XY,Z)=\frac12F(X,Y,Z)\quad\text{for all }Z.$$
> One checks from this defining relation that $\nabla$ is an affine connection (it is $C^\infty$-linear in $X$ and satisfies the Leibniz rule in $Y$). The Koszul formula then implies $\nabla g=0$ and $T^\nabla=0$.

> [!danger] Remark
> This theorem is the mathematical backbone of the usual GR philosophy: once the metric is given, the notion of free-fall (geodesic motion) and the notion of parallel transport are determined. Later we will connect the Levi-Civita geodesics back to the variational principle of Lecture 3: free massive particles extremize proper time, and the Euler–Lagrange equations are precisely the geodesic equation for $\nabla^g$.

## Koszul in Coordinates: the Christoffel Formula

Let $(x^1,\dots,x^n)$ be local coordinates, $\partial_i=\partial/\partial x^i$, and define the metric components

$$g_{ij}:=g(\partial_i,\partial_j),\quad (g^{ij})=(g_{ij})^{-1}.$$

Let $\Gamma^k{}_{ij}$ denote the Christoffel symbols of the Levi-Civita connection:

$$\nabla_{\partial_i}\partial_j=\Gamma^k{}_{ij}\,\partial_k.$$

Because $[\partial_i,\partial_j]=0$ and Levi-Civita is torsion-free, we immediately get symmetry.

> [!abstract] Symmetry of Levi-Civita Symbols
> In any coordinate system,
> $$\Gamma^k{}_{ij}=\Gamma^k{}_{ji}.$$

> [!success] Proof
> Torsion-free gives $\nabla_{\partial_i}\partial_j-\nabla_{\partial_j}\partial_i=[\partial_i,\partial_j]=0$, hence the coefficients in the basis $\{\partial_k\}$ are symmetric.

Now apply Koszul with $X=\partial_i$, $Y=\partial_j$, $Z=\partial_\ell$. The bracket terms vanish, so

$$2\,g(\nabla_{\partial_i}\partial_j,\partial_\ell)=\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}.$$

But

$$g(\nabla_{\partial_i}\partial_j,\partial_\ell)=g(\Gamma^k{}_{ij}\partial_k,\partial_\ell)=\Gamma^k{}_{ij}\,g_{k\ell}.$$

Therefore

$$2\,\Gamma^k{}_{ij}\,g_{k\ell}=\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}.$$

Multiplying by $g^{\ell m}$ yields:

> [!abstract] Christoffel Symbols of Levi-Civita
> In coordinates, the Levi-Civita Christoffel symbols are
> $$\Gamma^m{}_{ij}=\frac12\,g^{m\ell}\Big(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}\Big).$$

> [!danger] Computational Reflex
> Every time you see a metric written in coordinates, this is the first serious calculation you should be able to run. In GR, curvature will be a tensor built from first derivatives of $\Gamma$ and quadratic expressions in $\Gamma$, so one should expect “second derivatives of $g$ plus lower-order terms.” The Christoffel formula is the entrance ramp.

## Example I: Minkowski Spacetime in Inertial Coordinates

Let $M=\mathbb{R}^{4}$ with global coordinates $(t,x,y,z)$ and Minkowski metric

$$g=-dt^{2}+dx^{2}+dy^{2}+dz^{2}.$$

Then $g_{\mu\nu}$ is constant, hence $\partial_\alpha g_{\mu\nu}=0$ for all indices. The Christoffel formula gives:

> [!abstract] Levi-Civita of Minkowski in Inertial Coordinates
> In the standard inertial coordinates on $(\mathbb{R}^{1,3},\eta)$, all Christoffel symbols vanish:
> $$\Gamma^\mu{}_{\alpha\beta}=0.$$

> [!danger] Remark
> This is the cleanest coordinate expression of flatness: there exist global coordinates with $\Gamma\equiv 0$. But in non-inertial coordinates on Minkowski space, the **same** Levi-Civita connection has nonzero Christoffel symbols. That is not curvature; it is coordinate nonlinearity.

## Example II: Minkowski Spacetime in Spherical Spatial Coordinates

On $\mathbb{R}^{4}\setminus\{r=0\}$ introduce $(t,r,\theta,\phi)$ by

$$x=r\sin\theta\cos\phi,\quad y=r\sin\theta\sin\phi,\quad z=r\cos\theta.$$

Then Minkowski becomes

$$g=-dt^{2}+dr^{2}+r^{2}d\theta^{2}+r^{2}\sin^{2}\theta\,d\phi^{2}.$$

The nonzero metric components are
$$g_{00}=-1,\quad g_{11}=1,\quad g_{22}=r^{2},\quad g_{33}=r^{2}\sin^{2}\theta,$$

and the inverse components are
$$g^{00}=-1,\quad g^{11}=1,\quad g^{22}=\frac{1}{r^{2}},\quad g^{33}=\frac{1}{r^{2}\sin^{2}\theta}.$$

The only nonzero derivatives are
$$\partial_r g_{22}=2r,\quad \partial_r g_{33}=2r\sin^{2}\theta,\quad \partial_\theta g_{33}=2r^{2}\sin\theta\cos\theta.$$

> [!abstract] Nonzero Symbols for Minkowski in Spherical Coordinates
> Up to symmetry in the lower indices, the only nonzero Christoffel symbols are
> $$\Gamma^{r}{}_{\theta\theta}=-r,\quad \Gamma^{r}{}_{\phi\phi}=-r\sin^{2}\theta,$$
> $$\Gamma^{\theta}{}_{r\theta}=\frac{1}{r},\quad \Gamma^{\phi}{}_{r\phi}=\frac{1}{r},$$
> $$\Gamma^{\theta}{}_{\phi\phi}=-\sin\theta\cos\theta,\quad \Gamma^{\phi}{}_{\theta\phi}=\cot\theta.$$
> All Christoffel symbols with any $t$ index vanish.

> [!success] Proof
> We compute representative cases using
> $$\Gamma^m{}_{ij}=\frac12\,g^{m\ell}\Big(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}\Big).$$
>
> For $\Gamma^{r}{}_{\theta\theta}$, only the $\ell=r$ term contributes:
> $$\Gamma^{r}{}_{\theta\theta}=-\frac12 g^{rr}\partial_r g_{\theta\theta}=-\frac12\cdot 1\cdot \partial_r(r^2)=-r.$$
>
> For $\Gamma^{\theta}{}_{r\theta}$, only $\ell=\theta$ contributes:
> $$\Gamma^{\theta}{}_{r\theta}=\frac12 g^{\theta\theta}\partial_r g_{\theta\theta}=\frac12\cdot \frac{1}{r^2}\cdot 2r=\frac{1}{r}.$$
>
> For $\Gamma^{\phi}{}_{\theta\phi}$, only $\ell=\phi$ contributes:
> $$\Gamma^{\phi}{}_{\theta\phi}=\frac12 g^{\phi\phi}\partial_\theta g_{\phi\phi}=\frac12\cdot \frac{1}{r^2\sin^2\theta}\cdot 2r^2\sin\theta\cos\theta=\cot\theta.$$
> The remaining symbols follow similarly from the listed derivatives, and all $t$-symbols vanish because $g_{00}$ is constant and $g_{0i}=0$.

> [!danger] Remark
> These symbols match the Euclidean polar-coordinate computation from Lecture 4 in the spatial sector. They encode the coordinate “inertial terms” (centrifugal/Coriolis-type contributions) that appear when writing straight motion in spherical coordinates, even though spacetime is flat.

## Example III: The Round $2$-Sphere

Let $M=S^{2}$ with standard spherical coordinates $(\theta,\phi)$ on the chart $0<\theta<\pi$. The round metric is
$$g=d\theta^{2}+\sin^{2}\theta\,d\phi^{2}.$$

So
$$g_{\theta\theta}=1,\quad g_{\phi\phi}=\sin^{2}\theta,\quad g_{\theta\phi}=0,\quad g^{\theta\theta}=1,\quad g^{\phi\phi}=\frac{1}{\sin^{2}\theta}.$$

The only nonzero derivative is
$$\partial_\theta g_{\phi\phi}=2\sin\theta\cos\theta.$$

> [!abstract] Levi-Civita Symbols of the Round $S^{2}$
> Up to symmetry in the lower indices, the only nonzero Christoffel symbols are
> $$\Gamma^{\theta}{}_{\phi\phi}=-\sin\theta\cos\theta,\quad \Gamma^{\phi}{}_{\theta\phi}=\cot\theta.$$

> [!success] Proof
> Compute
> $$\Gamma^\theta{}_{\phi\phi}=-\frac12 g^{\theta\theta}\partial_\theta g_{\phi\phi}=-\frac12\cdot 1\cdot 2\sin\theta\cos\theta=-\sin\theta\cos\theta,$$
> and
> $$\Gamma^\phi{}_{\theta\phi}=\frac12 g^{\phi\phi}\partial_\theta g_{\phi\phi}=\frac12\cdot \frac{1}{\sin^2\theta}\cdot 2\sin\theta\cos\theta=\cot\theta.$$

> [!danger] Remark
> These symbols already contain a lot of geometry: the geodesic equation on $S^2$ written in $(\theta,\phi)$ coordinates will involve $\sin\theta\cos\theta$ and $\cot\theta$ terms, and those are exactly what makes great circles appear in coordinates as nontrivial curves. Once we define curvature, we will find that $S^2$ has nonzero curvature, unlike the Minkowski examples above.

## Local Inertial Frames and What “$\Gamma=0$ at a Point” Means

The Christoffel symbols are coordinate-dependent, but for Levi-Civita there is an important (and physically famous) fact:
at any point, one can choose coordinates in which the Christoffel symbols vanish **at that point**.

> [!abstract] Normal Coordinates: $\Gamma(p)=0$ Is Always Achievable
> Let $(M,g)$ be semi-Riemannian and let $\nabla$ be its Levi-Civita connection. For each $p\in M$ there exists a coordinate chart $(x^1,\dots,x^n)$ centered at $p$ such that
> $$\Gamma^k{}_{ij}(p)=0\quad\text{for all }i,j,k.$$

> [!danger] Remark
> This statement is the geometric content behind the “equivalence principle” slogan that freely falling frames are locally inertial. It does **not** mean that gravity can be transformed away globally; it means that the connection coefficients can be killed at a point, not their derivatives. Curvature will measure the obstruction to killing **both** $\Gamma$ and its first derivatives at a point. We will return to this carefully once we have geodesics and curvature on the table.

In this lecture we introduced Lorentzian metrics on manifolds, time orientation, and the Levi-Civita connection characterized by torsion-free metric compatibility. We also practiced how to compute with the Levi-Civita connection without confusing coordinates with geometry. Next we define geodesics and connect them to free fall and light propagation.