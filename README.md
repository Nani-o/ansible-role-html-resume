html-resume
===========

This role only copy an HTML resume to the desired folder alongside a phantomjs script to generate a PDF version of it.
You'll need an another role in order to install a webserver to serve it.
The resume deployed is a modificated version of this [template](https://www.openresumetemplates.com/cthulhu-one-page-resume/).

Compatibility
-------------

  - CentOS 6
  - CentOS 7
  - Ubuntu 12.04
  - Ubuntu 14.04
  - Ubuntu 16.04
  - Debian 8
  - Debian 9

Role Variables
--------------

A description of the settable variables for this role should go here, including any variables that are in defaults/main.yml, vars/main.yml, and any variables that can/should be set via parameters to the role. Any variables that are read from other roles and/or the global scope (ie. hostvars, group vars, etc.) should be mentioned here as well.

Dependencies
------------

A list of other roles hosted on Galaxy should go here, plus any details in regards to parameters that may need to be set for other roles, or variables that are used from other roles.

Example Playbook
----------------

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - { role: ansible-role-html-resume }

License
-------

MIT

Author Information
------------------

Sofiane MEDJKOUNE
