+++
date = '2024-05-17T15:44:10-04:00'
draft = true
title = "The Axiom of Choice and Its Equivalences"
categories = 'Math'
+++

The axiom of choice (AC) is one of the most discussed principles in modern mathematics. Unlike other axioms, the axiom of choice was not readily accepted—and even today, it remains somewhat controversial. For decades, mathematicians debated its validity. Some claimed to have proven it, only to later discover they had merely arrived at an equivalent formulation. Others embraced it, though this led to the emergence of various bizarre and counterintuitive constructions. Still others explored its role within alternative axiom systems, investigating what mathematics would look like without it.

As a result, although the axiom of choice is formally just another tool in set theory, its status is uniquely significant. Accepting it opens the door to a rich yet often strange mathematical universe; rejecting it, on the other hand, requires relinquishing many familiar lines of reasoning. Consequently, most modern branches of mathematics now take the axiom of choice as a standard assumption.
## Historical background

The axiom of choice essentially affirms the validity of selecting one element from each of infinitely many sets simultaneously. A formal statement is as follows:

> [!experiment] Axiom of choice
> For every family $\{A_i\}_{i\in I}$ of non-empty sets, there exists a function $f:I\to \bigcup_{i\in I} A_i$ such that $f(i)\in A_i$ for all $i\in I$.  

We all know that Cantor is the founder of modern set theory. He introduced a series of revolutionary ideas, which at the time brought him widespread criticism and even hostility. Among these was the well-ordering theorem (to be discussed below), which was closely tied to his system, yet Cantor himself never provided a rigorous proof. Zermelo attempted to prove the well-ordering theorem, and in doing so, he keenly observed a crucial point: Cantor, his supporters, and even his opponents had been tacitly assuming that "it is possible to choose one element from each of infinitely many sets". He formalized this as the axiom of choice, which immediately set off a storm of controversy.