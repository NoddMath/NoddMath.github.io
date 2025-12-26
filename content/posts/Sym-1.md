+++
date = "2024-10-13T15:44:10-04:00"
draft = false
title = "Linear Symplectic Algebra"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++
## Skew-Symmetric Bilinear Maps and Their Standard Form

> [!info] Skew-Symmetric Bilinear Map
> Let $V$ be a real vector space. A bilinear map $\Omega:V\times V\to \mathbb{R}$ is **skew-symmetric** if $\Omega(u,v)=-\Omega(v,u)$ for all $u,v\in V$.

Given such $\Omega$, it is convenient to package it as a linear map into the dual.

> [!info] The Induced Map and the Null Space
> Define the linear map
> $$\widetilde{\Omega}:V\longrightarrow V^*,\qquad \widetilde{\Omega}(v)(u):=\Omega(v,u).$$
> Its kernel
> $$\ker(\widetilde{\Omega})=\{\,v\in V \mid \Omega(v,u)=0 \ \text{for all }u\in V\,\}$$
> is called the **null space** (or **radical**) of $\Omega$.

> [!danger] Remark
> Skew-symmetry forces $\Omega(v,v)=0$ for all $v\in V$.
> Thus the interesting question is not positivity but rather **degeneracy**:
> whether there exist nonzero vectors annihilated by $\Omega$.

The key normal form is a skew-symmetric analogue of Gram--Schmidt.

> [!note] Standard Form for Skew-Symmetric Bilinear Maps
> Let $\Omega$ be a skew-symmetric bilinear map on an $m$-dimensional real vector space $V$. Then there exists a basis
> $$u_1,\dots,u_k,\ e_1,\dots,e_n,\ f_1,\dots,f_n$$
> of $V$ such that
> - $\Omega(u_i,v)=0$ for all $i$ and all $v\in V$;
> - $\Omega(e_i,e_j)=0=\Omega(f_i,f_j)$ for all $i,j$;
> - $\Omega(e_i,f_j)=\delta_{ij}$ for all $i,j$.
> 
> In particular, $m=k+2n$, and the restriction of $\Omega$ to
> $W:=\mathrm{span}\{e_1,\dots,e_n,f_1,\dots,f_n\}$ is nondegenerate.

> [!success] Proof
> Let $U:=\ker(\widetilde{\Omega})$. Choose a basis $u_1,\dots,u_k$ of $U$
> and a complementary subspace $W$ so that $V=U\oplus W$.
> By definition, $\Omega|_{U\times V}\equiv 0$, so it remains to put $\Omega|_{W\times W}$ into standard form.
> 
> If $W=\{0\}$ there is nothing to prove. Otherwise, pick $0\neq e_1\in W$.
> Because $e_1\notin U$, there exists $f_1\in V$ with $\Omega(e_1,f_1)\neq 0$.
> Replacing $f_1$ by $\frac{1}{\Omega(e_1,f_1)}f_1$, we may assume $\Omega(e_1,f_1)=1$.
> Since $\Omega(e_1,u)=0$ for all $u\in U$, we may further replace $f_1$ by its $W$-component (with respect to $V=U\oplus W$) without changing $\Omega(e_1,f_1)$; hence $f_1\in W$.
> 
> Let $W_1:=\mathrm{span}\{e_1,f_1\}\subset W$ and define
> $$W':=\{\,w\in W \mid \Omega(w,e_1)=0=\Omega(w,f_1)\,\}.$$
> We claim that $W=W_1\oplus W'$. Indeed, given $w\in W$, set
> $$w':=w-\Omega(w,f_1)e_1+\Omega(w,e_1)f_1.$$
> A direct calculation using skew-symmetry and $\Omega(e_1,f_1)=1$ shows
> $\Omega(w',e_1)=\Omega(w',f_1)=0$, hence $w'\in W'$, and thus
> $w=\bigl(\Omega(w,f_1)e_1-\Omega(w,e_1)f_1\bigr)+w'\in W_1+W'$.
> 
> Moreover, if $a e_1+b f_1\in W'$ then
> $$0=\Omega(ae_1+bf_1,f_1)=a\Omega(e_1,f_1)=a,\qquad 0=\Omega(ae_1+bf_1,e_1)=b\Omega(f_1,e_1)=-b,$$
> so $a=b=0$ and $W_1\cap W'=\{0\}$. This proves the direct sum.
> 
> Now restrict $\Omega$ to $W'$. The dimension drops by $2$, and the restriction remains skew-symmetric.
> Iterating the construction yields vectors $e_2,f_2,\dots,e_n,f_n$ spanning $W$
> with the desired pairing properties, together with the $u_i$ spanning $U$.

> [!danger] Remark
> In the basis above, the matrix of $\Omega$ is block-diagonal with a zero block on $U$
> and $n$ copies of the standard $2\times 2$ skew block on the remaining $2n$ coordinates.
> This is the linear-algebraic reason that the rank of a skew-symmetric matrix is even.

## Symplectic Vector Spaces and Symplectic Bases

> [!info] Symplectic Form
> A skew-symmetric bilinear form $\omega$ on $V$ is **symplectic** (or **nondegenerate**)
> if $\widetilde{\omega}:V\to V^*$ is an isomorphism, equivalently $\ker(\widetilde{\omega})=\{0\}$.
> A **symplectic vector space** is a pair $(V,\omega)$ where $\omega$ is symplectic.

> [!idea] Existence of Symplectic Bases
> If $(V,\omega)$ is symplectic, then $\dim V=2n$ is even. Moreover, $V$ admits a basis
> $e_1,\dots,e_n,f_1,\dots,f_n$ such that
> $$\omega(e_i,e_j)=0=\omega(f_i,f_j),\qquad \omega(e_i,f_j)=\delta_{ij}.$$
> Such a basis is called a **symplectic basis**.

> [!success] Proof
> Apply the standard form theorem to $\omega$. Nondegeneracy forces $k=\dim\ker(\widetilde{\omega})=0$,
> hence $\dim V=2n$ and the remaining basis vectors form a symplectic basis.

> [!important] The Standard Model
> On $\mathbb{R}^{2n}$ with coordinates $(x_1,\dots,x_n,y_1,\dots,y_n)$, define
> $$\omega_0:=\sum_{j=1}^n dx_j\wedge dy_j.$$
> In the standard basis $e_1,\dots,e_n,f_1,\dots,f_n$ (where $e_j=\partial_{x_j}$ and $f_j=\partial_{y_j}$),
> the matrix of $\omega_0$ is
> $$J:=\begin{pmatrix} 0 & I_n \\ -I_n & 0 \end{pmatrix},\qquad \omega_0(u,v)=u^{\mathsf T}Jv.$$

> [!example] A Canonical Symplectic Form on $E\oplus E^*$
> Let $E$ be a real vector space. On $V:=E\oplus E^*$ define
> $$\omega\bigl((v,\alpha),(w,\beta)\bigr):=\beta(v)-\alpha(w).$$
> Skew-symmetry is immediate. If $\omega((v,\alpha),(w,\beta))=0$ for all $(w,\beta)$, then taking $\beta=0$
> gives $\alpha(w)=0$ for all $w$, hence $\alpha=0$, and taking $w=0$ gives $\beta(v)=0$ for all $\beta$, hence $v=0$.
> Thus $\omega$ is nondegenerate and $(E\oplus E^*,\omega)$ is symplectic.

## Symplectic Orthogonals and Isotropic, Coisotropic, and Lagrangian Subspaces

Let $(V,\omega)$ be symplectic of dimension $2n$.

> [!info] Symplectic Orthogonal
> For a subspace $W\subset V$, its **symplectic orthogonal** is
> $$W^\omega:=\{\,v\in V \mid \omega(v,w)=0\ \text{for all }w\in W\,\}.$$

The map $\widetilde{\omega}:V\to V^*$ converts symplectic orthogonals into ordinary annihilators.

> [!note] Symplectic Orthogonals as Annihilators
> Let $W\subset V$ be a subspace and let $W^\perp\subset V^*$ denote the annihilator
> $$W^\perp:=\{\,\lambda\in V^* \mid \lambda|_W\equiv 0\,\}.$$
> Then $\widetilde{\omega}(W^\omega)=W^\perp$. In particular,
> $$\dim W+\dim W^\omega=2n.$$

> [!success] Proof
> By definition, $v\in W^\omega$ iff $\widetilde{\omega}(v)(w)=\omega(v,w)=0$ for all $w\in W$, i.e., iff $\widetilde{\omega}(v)\in W^\perp$. Since $\widetilde{\omega}$ is an isomorphism, it maps $W^\omega$ bijectively onto $W^\perp$. The dimension formula follows from $\dim W^\perp=\dim V^*-\dim W = 2n-\dim W$.

> [!idea] Double Symplectic Orthogonal
> For every subspace $W\subset V$ one has $(W^\omega)^\omega=W$.

> [!success] Proof
> Apply $\widetilde{\omega}$ to both sides. Since $\widetilde{\omega}(W^\omega)=W^\perp$,
> we have $\widetilde{\omega}((W^\omega)^\omega)=(W^\perp)^\perp=W$, where the last equality
> is the standard linear-algebra fact identifying the double annihilator with $W$.

> [!info] Isotropic, Coisotropic, and Lagrangian
> A subspace $W\subset (V,\omega)$ is
> 
> - **isotropic** if $\omega|_{W\times W}\equiv 0$, equivalently $W\subset W^\omega$;
> - **coisotropic** if $W^\omega\subset W$;
> - **Lagrangian** if it is both isotropic and coisotropic, equivalently $W=W^\omega$.

> [!abstract] Dimension Bounds
> Let $(V,\omega)$ be symplectic with $\dim V=2n$.
> 
> - If $W$ is isotropic, then $\dim W\le n$.
> - If $W$ is coisotropic, then $\dim W\ge n$.
> - If $W$ is Lagrangian, then $\dim W=n$.

> [!success] Proof
> If $W$ is isotropic then $W\subset W^\omega$, hence $\dim W\le \dim W^\omega$.
> Using $\dim W+\dim W^\omega=2n$ gives $\dim W\le n$. The coisotropic case is equivalent:
> $W^\omega\subset W$ implies $\dim W^\omega\le \dim W$, hence $\dim W\ge n$.
> If $W$ is Lagrangian, then $W=W^\omega$ so $2\dim W=2n$ and $\dim W=n$.

> [!example] Standard Isotropic and Lagrangian Subspaces
> In $(\mathbb{R}^{2n},\omega_0)$, the coordinate subspace
> $$L_0:=\mathbb{R}^n\times\{0\}=\mathrm{span}\{e_1,\dots,e_n\}$$
> is Lagrangian, since $\omega_0$ pairs $e_i$ only with $f_i$.
> More generally, if $A:\mathbb{R}^n\to (\mathbb{R}^n)^*$ is symmetric, then the graph
> $$\Gamma(A):=\{(x,Ax)\mid x\in \mathbb{R}^n\}\subset \mathbb{R}^n\oplus(\mathbb{R}^n)^*$$
> is Lagrangian for the canonical symplectic form on $E\oplus E^*$.

## Linear Symplectomorphisms and the Symplectic Group

> [!info] Linear Symplectomorphism and the Symplectic Group
> Let $(V,\omega)$ and $(V',\omega')$ be symplectic vector spaces.
> A linear isomorphism $\Phi:V\to V'$ is a **(linear) symplectomorphism**
> if $\Phi^*\omega'=\omega$, i.e.
> $$\omega'(\Phi v,\Phi w)=\omega(v,w)\quad\text{for all }v,w\in V.$$
> The group of linear symplectomorphisms of $(V,\omega)$ is denoted $\mathrm{Sp}(V,\omega)$.

> [!abstract] Matrix Characterization
> Let $A:\mathbb{R}^{2n}\to \mathbb{R}^{2n}$ be linear and let $\omega_0$ be as in **The Standard Model**.
> Then $A$ is symplectic iff
> $$A^{\mathsf T}JA=J.$$
> In particular, $\det(A)=1$.

> [!success] Proof
> Using $\omega_0(u,v)=u^{\mathsf T}Jv$, the condition $A^*\omega_0=\omega_0$ becomes
> $$u^{\mathsf T}(A^{\mathsf T}JA)v=u^{\mathsf T}Jv\quad\text{for all }u,v,$$
> hence $A^{\mathsf T}JA=J$. Taking determinants gives
> $\det(A)^2\det(J)=\det(J)$, so $\det(A)^2=1$. Since $\mathrm{Sp}(2n,\mathbb{R})$
> is connected (in fact, path connected), $\det(A)$ must be $+1$.

> [!abstract] Symplectic Volume
> If $\Phi\in \mathrm{Sp}(V,\omega)$ and $\dim V=2n$, then
> $$\Phi^*(\omega^n)=\omega^n.$$
> In particular, symplectic linear maps preserve the canonical volume form $\frac{1}{n!}\omega^n$.

> [!success] Proof
> From $\Phi^*\omega=\omega$ and multiplicativity of pullbacks under wedge products,
> $$\Phi^*(\omega^n)=(\Phi^*\omega)^n=\omega^n.$$

> [!danger] Why We Care
> Linear symplectic algebra is the local model for everything that follows.
> Later, Darboux's theorem will say that any symplectic manifold looks locally like
> $(\mathbb{R}^{2n},\omega_0)$, so the notions introduced here---symplectic bases,
> symplectic orthogonals, and Lagrangian subspaces---will reappear pointwise on tangent spaces.
