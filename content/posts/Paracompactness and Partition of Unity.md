+++
date = "2023-11-19T15:44:10-04:00"
draft = false
title = "Paracompactness and Partition of Unity"
categories = "Math"
ShowToc = true
tags = [ "General Topology" ]
+++

## Paracompactness and its properties

> [!info] Open refinement
> Given a topological space $X$, let $\mathcal{U}$ and $\mathcal{V}$ be open covers of $X$. $\mathcal{V}$ is said to be an **open refinement** of $\mathcal{U}$ if for any $V\in \mathcal{V}$, there exists $U\in \mathcal{U}$ such that $V\subseteq U$.

> [!info] Local finiteness
> An open cover $\mathcal{U}$ of a topological space $X$ is **locally finite** if for every $x\in X$, there exists a neighborhood $V$ of $x$ that intersects only finitely many members of $\mathcal{U}$.

> [!info] Paracompactness
> A topological space is **paracompact** if every open cover has a locally finite open refinement.

> [!abstract] Compactness implies paracompactness
> Every compact space is paracompact.
> > [!success] Proof
> > Let $X$ be a compact space and $\{U_\alpha\}_{\alpha\in A}$ an arbitrary open cover of $X$. By compactness, there exist finitely many indices $\alpha_1,\dots,\alpha_n\in A$ such that $$X=\bigcup_{i=1}^n U_{\alpha_i}.$$
> > The finite subcover $\{U_{\alpha_1},\dots,U_{\alpha_n}\}$ is trivially an open refinement of $\{U_\alpha\}_{\alpha\in A}$. Also, such a finite subcover is automatically locally finite, because no neighborhood can intersect more than $n$ of its members. Therefore, every open cover of $X$ admits a locally finite open refinement, and we conclude that $X$ is paracompact.
## Partition of unity

> [!abstract] Relationship between paracompactness and metric spaces
> Every metric space is paracompact.