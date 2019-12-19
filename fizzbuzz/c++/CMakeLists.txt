cmake_minimum_required(VERSION 3.15)
project(fizzbuzz)

include(CTest)
set(CMAKE_CXX_STANDARD 14)

include_directories(include)
configure_file(CMakeLists.txt.in googletest-download/CMakeLists.txt)
execute_process(COMMAND "${CMAKE_COMMAND}" -G "${CMAKE_GENERATOR}" .
        WORKING_DIRECTORY "${CMAKE_BINARY_DIR}/googletest-download"
        )
execute_process(COMMAND "${CMAKE_COMMAND}" --build .
        WORKING_DIRECTORY "${CMAKE_BINARY_DIR}/googletest-download"
        )

set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

add_subdirectory("${CMAKE_BINARY_DIR}/googletest-src"
        "${CMAKE_BINARY_DIR}/googletest-build"
        )

add_executable(fizzbuzz_tests src/fizzbuzz.cpp tests/fizzbuzz_tests.cpp tests/main.cpp tests/main.h)
target_link_libraries(fizzbuzz_tests gtest)
add_test(NAME fizzbuzz_test COMMAND fizzbuzz_tests)

