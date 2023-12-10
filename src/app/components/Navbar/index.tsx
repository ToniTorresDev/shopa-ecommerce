import React, { useContext } from "react"
import { NavLink } from "react-router-dom"

import { leftNav, rightNav } from "./menuLists"

import { ShoppingBagIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../context"

function Navbar() {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4"
  const pendingStyle = ""
  const transitioningStyle = ""

  return (
    <nav
      id="main-navbar"
      className="fized z-10 flex w-full items-center justify-between px-8 py-5 text-sm font-light"
    >
      <ul className="flex items-center gap-3">
        {leftNav.map((link) => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? pendingStyle : "",
                  isActive ? activeStyle : "",
                  isTransitioning ? transitioningStyle : "",
                ].join(" ")
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <h5>Carlos Gonsalez Perro</h5>
          <small>info@example.com</small>
          <small>10-10-2006</small>
        </li>
        {rightNav.map((link) => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? pendingStyle : "",
                  isActive ? activeStyle : "",
                  isTransitioning ? transitioningStyle : "",
                ].join(" ")
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        <li
          className="flex cursor-pointer items-center"
          onClick={() => context.showShoppingCartModal()}
        >
          <ShoppingBagIcon className="h-6 w-6 cursor-pointer text-black" />
          {context.shoppingCart.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
