
 <ul className=" md:inline-flex gap-7 items-center text-gray-900 hover:text-black duration-200">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item.title}
              <span className="w-full h-[2px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </ul>
